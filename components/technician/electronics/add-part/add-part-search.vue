<template>
  <div class="shadow-md w-full">

    <div
      class="search-container flex w-fit-content bg-white items-center content-center border border-solid border-gray-300"
    >

      <div class="h-12 relative w-10">
        <font-awesome-icon
          class="ml-1 h-4 text-gray-400 absolute-center-h-v"
          :icon="['fas', 'search']"
        />
      </div>

      <input
        placeholder="search name of the component"
        class="bg-white flex-grow outline-none h-8 text-gray-800 pr-3"
        v-bind:value="searchComponent"
        v-on:input="searchComponent = $event.target.value"
        v-on:keyup="search_component"
      />
    </div>

    <div class="flex justify-between items-center p-4" v-if="selectedPart">
      <div class="flex items-center">
        <img src="~/static/images/add-part.png" alt />
        <div class="ml-5">
          <span class="block font-semibold">{{selectedPart.name}}</span>
          <span
            class="text-sm, text-gray-600"
          >{{selectedPart.snippet}}</span>
        </div>
      </div>
      <div>
        <a class="btn pill-button px-8 py-0" target="blank" :href="selectedPart.datasheet" style="padding: 6px 32px;" >Datasheet</a>
      </div>
    </div>


    <table>
      <thead>
        <tr class="text-gray-800 h10">
          <th class="text-left w-64">Name</th>
          <th class="text-left">Country</th>
          <th class="text-left">Package</th>
          <th class="text-left">Manufacturer</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
       
        <tr class v-for="(article, index) in partList" :key="`${index}`">
          <td class>{{article.name}}</td>
          <td>{{article.country}}</td>
          <td>{{article.package}}</td>
          <td class="text-ideeza">{{article.manufacturer}}</td>
          <td>
            <!-- <button @click="$emit('select', article)" class="btn pill-button px-4 py-0">select</button> -->
            <button @click="select_part(index)" class="btn pill-button px-4 py-0">select</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!--Table Stats-->
    <div class="mt-5 lg:flex justify-end">
      <div class="lg:w-3/5 p-3 lg:flex justify-between">
        <!--Paging-->
        <div class="flex items-center">
          <span class="inline-block mr-4 cursor-pointer" @click="decreasekey">
            <font-awesome-icon
              class="mr-2 h-4 cursor-pointer"
              :icon="['fas', 'angle-double-left']"
            />Previous
          </span>
          <!-- <span v-for="inde in counterarray " :key="inde">
            <span v-if="currentviewpoint == inde " class="text-lg text-ideeza">
              <button style="width:35px;" @click="selectedkey(inde)">{{inde}}</button>
            </span>
            <span v-else>
              <button style="width:35px;" @click="selectedkey(inde)">{{inde}}</button>
            </span>
          </span> -->
          <span class="inline-block ml-4 cursor-pointer" @click="increasekey">
            Next
            <font-awesome-icon
              class="ml-2 h-4 cursor-pointer"
              :icon="['fas', 'angle-double-right']"
            />
          </span>
        </div>

        <div class="flex items-center">
          <span class="inline-block ml-32">Show</span>
          <select style="font-size: 15px;" class="field field--border-none ml-2 h-10" @change="changeshowperiod">
            <!-- <option
              v-for="(tabledata, index) in articleArray"
              v-if="length > index "
            >{{(index)*5+1}}-{{(index)*5+5}}</option> -->
            <option>All</option>
            <option>1-3</option>
            <option>5-10</option>
            <option>11-15</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import technicianaddpartsearchs from "~/json/technicianaddpartsearch.json";
import apiService from "~/apiService/have_token.js"
export default {
  name: "add-part-search",
  data: function() {
    return {
      // technicianaddpartsearchs: technicianaddpartsearchs,
      searchTerm: "",
      articles: technicianaddpartsearchs,
      searchComponent: "",   
      partList : [],
      selectedPart : null

    };
  },
  methods: {

    increasekey() {

    },
    decreasekey() {

    },
    changeshowperiod() {
    },
    select_part(index){
      console.log("selected part : ", index)
      this.selectedPart = this.partList[index]
    },
    search_component(e){
      if (this.searchComponent.length<3 ||  e.key != "Enter")
        return;

      let data = new FormData()
      data.append("query", this.searchComponent)

      let sendData ={
        url: "/api/parts_search",
        method: "post",
        data
      }

      let partList = []

      apiService(sendData, (res)=>{

        console.log("reponse here: ", res)
        
        if(res)
          res.data.results.map(item=>{
            let snippet = item.snippet
            if(!item.snippet)item.snippet = "unknown unknown"
            let snippets = item.snippet.split(' ')
            let packages = snippets[snippets.length-1]
            // packages = packages.split(" ")
            let datasheet  = item.item.datasheets[0]
            
            if(!datasheet) 
              datasheet="#"
            else
              datasheet = datasheet.url

            partList.push({
              uid: item.item.uid,
              name: item.item.mpn,
              country: res.data.user_country,
              manufacturer: item.item.manufacturer.name,
              snippet,
              package: packages,
              datasheet: item.item.datasheets[0].url
            })
          })

        this.partList = partList
        console.log("partList : ", partList)

      })
    }
  }
};
</script>

<style scoped>
@screen lg {
  table {
    @apply mb-5 w-full table-fixed border-collapse text-gray-600;
  }
  thead tr {
    @apply bg-white px-6 pl-16;
  }
  thead th {
    @apply p-6;
  }

  tbody td {
    @apply p-6;
  }
  tbody tr:even {
    @apply bg-white;
  }
}

@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  /* Force table to not be like tables anymore */
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    font-weight: 600;
  }

  /*
      Label the data
      */
  td:nth-of-type(1):before {
    content: "Products";
  }
  td:nth-of-type(2):before {
    content: "Color";
  }
  td:nth-of-type(3):before {
    content: "Price";
  }
  td:nth-of-type(4):before {
    content: "Quantity";
  }
  td:nth-of-type(5):before {
    content: "Cost";
  }
  td:nth-of-type(6):before {
    content: "Action";
  }
}
</style>
