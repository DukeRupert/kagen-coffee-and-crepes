<script>
  // FIXME: Validation

  import Button from "./Button.svelte";
</script>

<div class="form-container">
  <h2 class="center">Contact Us</h2>

  <form
    name="contact"
    action="/success"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
  >
    <!-- Honeypot   -->
    <input type="hidden" name="form-name" value="contact" />
    <div hidden aria-hidden="true">
      <label>
        Don’t fill this out if you're human:
        <input name="bot-field" />
      </label>
    </div>
    <!-- Name -->
    <label for="name">
      Name:
      <input type="text" name="name" placeholder="Your Name" required />
    </label>
    <!-- Email -->
    <label>
      Email:
      <input type="email" name="email" placeholder="bob@example.com" required />
    </label>
    <!-- Location -->
    <label
      >Which location:
      <select name="location[]">
        <option value="tri-cities">Tri-Cities, WA</option>
        <option value="spokane">Spokane, WA</option>
      </select>
    </label>
    <!-- Message -->
    <label for="message">
      Message:
      <textarea
        rows="6"
        type="text"
        name="message"
        placeholder="Your message here..."
        required
      />
    </label>
    <!-- Submit -->
    <Button />
  </form>
</div>

<style>
  .form-container {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    background: var(--elevated);
    color: var(--color);
    box-shadow: var(--box-shadow);
  }

  form {
    box-sizing: border-box;
    font-family: Roboto, -apple-system, sans-serif;
  }

  form > div {
    margin-bottom: 1em;
    padding: 0;
  }

  input,
  select,
  textarea {
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    box-sizing: border-box;
  }

  label {
    display: block;
    margin-bottom: 1rem;
  }

  .center {
    text-align: center;
  }
</style>
