<template>
  <div>
    <!-- Page header with NavBar-->
    <!-- Page body Start -->
    <div class="container">
      <div style="height:84vh;">
        <div class="demoImg">
        </div>
        <div class="vfor">
          <table>
            <thead>
            <tr><th width="10%">Sr.No</th><th width="20%">Title</th><th width="10%">Author</th><th width="60%">Description</th></tr>
            </thead>
            <tbody>
            <tr v-for="(book, index) in books">
              <td>{{ index }}</td><td>{{ book.name }}</td><td>{{ book.author }}</td><td> {{ book.description }}</td>
            </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
  <!-- Page body end -->
  </div>
</template>

<script>
export default {
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
