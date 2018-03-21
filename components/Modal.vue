<template>
  <!-- Modal -->
  <div id="demoModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content" style="background-color: cadetblue;">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">{{ modalHeading }}</h4>
        </div>
        <div class="modal-body">
          <p>Username:  {{ content }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return { modalHeading: 'Confirmation Dialog',
      content: 'Submitting Form'
    }
  }
}
</script>
