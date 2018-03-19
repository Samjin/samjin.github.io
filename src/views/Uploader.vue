<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-6">
        <div type="" id="progress">Upload</div>
        <button type="" id="uploader" >Upload</button>
    </div>
  </div>
</template>

<script>

/*Get elements*/
// const uploader = document.getElementById('progress')
// const fileBtn = document.getElementById('fileBtn')

// Bind change event to template 
// Get file
// Create a stroage ref: .ref('folder_name/file.name')
// Upload file: var task = storageRef.put(file)
// Update progress bar

export default {
  name: 'Uploader',
  props: {},
  progress: function () {    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
