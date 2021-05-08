<!-- <script context="module" ✂prettier:content✂="CiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMgfSkgewogICAgdHJ5IHsKICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaCgiYXBpL29wZW5Qb3NpdGlvbnMiKTsKICAgICAgY29uc3QgeyBwb3NpdGlvbnMgfSA9IGF3YWl0IHJlcy5qc29uKCk7CiAgICAgIHJldHVybiB7IHBvc2l0aW9ucyB9OwogICAgfSBjYXRjaCAoZXJyKSB7CiAgICAgIHRoaXMuZXJyb3IoNTAwLCBlcnIpOwogICAgfQogIH0K" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script> -->
<script>
  import ApplicantForm from "../components/ApplicantForm.svelte";
  import OpenPositions from "../components/OpenPositions.svelte";

  export let positions = {};
  // let array = positions.positions;
  let array = [{ title: "FiXME" }];
</script>

<svelte:head>
  <title>Kagens Coffee & Crepes | Join Our Team</title>
</svelte:head>

<section class="container page-wrapper">
  <div class="child">
    <OpenPositions positions={array} />
  </div>
  <div class="child">
    <ApplicantForm />
  </div>
</section>

<style>
  .container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .child {
    margin: 0 2rem 3rem 2rem;
    width: 100%;
    flex-basis: 500px;
  }
</style>
