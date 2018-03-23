<template>
  <div>
    <!-- Page header with NavBar-->
    <!-- Page body Start -->
    <div class="container">
      <div style="height:84vh;">
        <div class="demoImg">
        </div>
        <div id="vfor"  style="display:none;" class="show">
          <h3>v-for loop demo</h3>
          <div class="vfor">
            <table class="table">
              <thead>
              <tr class="warning"><th width="10%">Sr.No</th><th width="20%">Title</th><th width="10%">Author</th><th width="60%">Description</th></tr>
              </thead>
              <tbody>
              <tr v-for="book in books">
                <td>{{ index }}</td><td>{{ book.name }}</td><td>{{ book.author }}</td><td> {{ book.description }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Page footer End -->
  </div>
</template>

<script>
  data: {
    return {
      books:[
        {'name': 'The Foreigner', 'author': 'Mac The', 'description': 'The Foreigner book written by Mac The is ....'},
        {'name': 'The Visitor', 'author': 'Crimson', 'description': 'The Visitor book written by Crimson is ....'},
        {'name': 'Empire Sold', 'author': 'Spooky Tooth', 'description': 'Empire Sold book written by Spooky Tooth is ....'}]
    }
  }
}
</script>
