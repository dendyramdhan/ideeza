<template>
  <div class="settings-security">
    <!---->
    <!--Profile Information-->
    <!---->
    <div class="security-form">
      <div class="md:flex justify-between items-center pb-3 border-b border-solid border-gray-400 p-5 lg:p-0">
        <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Change your password</h1>
      </div>

      <!--Form Container-->
      <div class="my-5 p-5 bg-white shadow-md">

        <!--Form Fields-->
        <div class="form-field ">
          <div class="field-label" >Old Password</div>
          <div class="field-input flex-grow">
            <input class="field h-10" name="" />
          </div>
        </div>

        <div class="form-field ">
          <div class="field-label" >New Password</div>
          <div class="field-input flex-grow">
            <input class="field h-10" name="" />
          </div>
        </div>

        <div class="form-field ">
          <div class="field-label" >Confirm Password</div>
          <div class="field-input flex-grow">
            <input class="field h-10" name="" />
          </div>
        </div>

        <div class="mt-8 mb-3 text-center">
          <button class="btn px-20 pill-button pill-button--ideeza">Update Password</button>
        </div>

      </div>
    </div>


    <!---->
    <!--Login History-->
    <!---->
    <div class="md:flex mt-20 justify-between items-center pb-3 border-b border-solid border-gray-400 p-5 lg:p-0">
      <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Login History</h1>
    </div>

    <!--Container-->
    <div class="my-5 p-5 bg-white shadow-md ">

      <table>
        <thead>
        <tr class="text-gray-800 h16">
          <th class="text-left">Browser/Device</th>
          <th class="text-left">Location</th>
          <th class="text-left">Recent Activity</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr class="">
          <td class="">Chrome/Windows 10</td>
          <td >NewYork NY USA</td>
          <td >About 3 hours ago</td>
          <td class="lg:text-right"><font-awesome-icon class="ml-1 h-4 cursor-pointer text-gray-400" :icon="['fas', 'times']"/></td>
        </tr>

        <tr class="">
          <td class="">Chrome/Windows 10</td>
          <td >NewYork NY USA</td>
          <td >About 3 hours ago</td>
          <td class="lg:text-right"><font-awesome-icon class="ml-1 h-4 cursor-pointer text-gray-400" :icon="['fas', 'times']"/></td>
        </tr>

        </tbody>
      </table>

      <div class="text-center lg:text-right text-sm text-gray-500">
        If you see something unfamiliar <span class="text-ideeza">change your password</span>
      </div>

    </div>

  </div>
</template>

<script>
    export default {
        name: "security",

    }
</script>

<style scoped>
  .settings-security{
    max-width: 900px;
  }
  .security-form{
    max-width: 600px;
  }
  .form-field{
    @apply py-4 border-b border-solid border-gray-300;
  }
  .form-field:last-child{
    @apply border-0;
  }
  .field-label{
    @apply w-56 text-gray-600 text-xl font-semibold
  }

  @screen md{
    .form-field{
      @apply flex;
    }
  }

  @screen lg{
    table{
      @apply mb-5 w-full table-auto border-collapse text-gray-600;
    }
    tbody td{
      @apply border-t border-solid border-gray-400 py-3 my-3;
    }
    tbody tr:last-child td{
      @apply border-b border-solid border-gray-400 py-3 my-3;
    }
  }

  @media
  only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px)  {

    /* Force table to not be like tables anymore */
    table, thead, tbody, th, td, tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr { border: 1px solid #ccc; margin-bottom: 10px; }

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
    td:nth-of-type(1):before { content: "Browser/Device"; }
    td:nth-of-type(2):before { content: "Location"; }
    td:nth-of-type(3):before { content: "Recent Activity"; }
    td:nth-of-type(4):before { content: " "; }
  }
</style>
