<template>
  <div class="md:m-8 lg:m-8 m-2">
    <div class="my-2">
      <div class="max-w-xl">
        <h1 class="text-gray-800 text-xl font-semibold">Change Your Password</h1>
        <hr class="mt-2 mb-5">
        <div class="bg-white shadow-lg">
          <div class="p-5">
            <div class="form-field">
              <div class="field-label">Old Password</div>
              <div class="field-input flex-grow">
                <input class="field p-1" name="name" type="password" value="PCXL.L."/>
              </div>
            </div>
             <div class="form-field">
              <div class="field-label">New Password</div>
              <div class="field-input flex-grow">
                <input class="field p-1" name="name" type="password"  value="PCXL.L."/>
              </div>
            </div>
             <div class="form-field">
              <div class="field-label">Confirm Password</div>
              <div class="field-input flex-grow">
                <input class="field p-1" name="name" type="password" value="PCXL.L."/>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="mt-5">
                <button class="text-white rounded-full bg-ideeza px-4 py-1">Update Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <h1 class="text-gray-800 text-xl font-semibold">Login History</h1>
      <hr class="mt-2 mb-5">
      <div class="mb-5 p-5 bg-white shadow-md ">

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
          <td class="lg:text-right text-ideeza">Log Out</td>
        </tr>

        <tr class="">
          <td class="">Chrome/Windows 10</td>
          <td >NewYork NY USA</td>
          <td >About 3 hours ago</td>
          <td class="lg:text-right text-ideeza">Log Out</td>
        </tr>

        </tbody>
      </table>

      <div class="text-center lg:text-right text-sm text-gray-500">
        If you see something unfamiliar <span class="text-ideeza">change your password</span>
      </div>

    </div>
      <!-- <div class="max-w-2xl md:ml-10 md:mr-10">
        <h1>Login History</h1>
        <hr class="mt-2 mb-5">
        <div class="bg-white shadow-lg">
          <div class="p-5">
            <div class="flex justify-between">
              <div>
                <h1>Browser/Device</h1>
              </div>
              <div>
                <h1>Location</h1>
              </div>
              <div>
                <h1>Recent Activity</h1>
              </div>
            </div>
            <hr class="mt-2 mb-2">
            <div class="flex justify-between">
              <div>
                <p>chrome/Windows 10</p>
              </div>
              <div>
                <p><span>Sarajevo</span>,Bih Bosia and Herzigovena</p>
              </div>
              <div>
                <p>About 3 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  layout:'service-provider-setting'
}
</script>
<style scoped>
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
  .form-field.textarea{
  @apply py-2 border-b border-solid border-gray-300 items-start;
}
.form-field{
    @apply py-2 border-b border-solid border-gray-300 items-center;
  }
  .form-field:last-child{
    @apply border-0;
  }
  .field-label{
    @apply w-56 text-gray-600 text-base font-semibold;
  }

  @screen md{
    .form-field{
      @apply flex;
    }
  }
  select.w-full{
    width: 100% !important;
    max-width: 100% !important;
  }
</style>
