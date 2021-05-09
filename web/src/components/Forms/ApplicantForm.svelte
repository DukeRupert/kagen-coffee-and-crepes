<script>
  import Button from "./Button.svelte";

  // FIXME: Validation
</script>

<div class="form-container">
  <h2 class="center">Apply</h2>
  <form
    name="applicant"
    action="/success"
    method="POST"
    enctype="multipart/form-data"
    data-netlify="true"
    netlify-honeypot="bot-field"
  >
    <!-- Honeypot   -->
    <input type="hidden" name="form-name" value="applicant" />
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
    <!-- Phone -->
    <label for="phone">
      Phone:
      <input
        type="tel"
        name="phone"
        placeholder="123-456-9875"
        title="9 digit phone number"
        required
      />
    </label>
    <!-- Email -->
    <label>
      Email:
      <input type="email" name="email" placeholder="bob@example.com" required />
    </label>
    <!-- Legal to work? -->
    <label>
      Are you legally eligible to work in the US?
      <input type="checkbox" name="legal-status" class="checkbox" value="Yes" />
    </label>
    <!-- Veteran? -->
    <label>
      Are you a Veteran?
      <input
        type="checkbox"
        name="veteran-status"
        class="checkbox"
        value="Yes"
      />
    </label>
    <!-- Background Check? -->
    <label>
      If selected for employment are you willing to submit to a background
      check?
      <input
        type="checkbox"
        name="background-check"
        class="checkbox"
        value="Yes"
      />
    </label>
    <!-- Location -->
    <label
      >Which location:
      <select name="location[]">
        <option value="tri-cities">Tri-Cities, WA</option>
        <option value="spokane">Spokane, WA</option>
      </select>
    </label>
    <!-- Position  -->
    <label>
      Position you are you applying for:

      <input type="text" name="position" required />
    </label>
    <!-- Start Date? -->
    <label>
      Available start date:
      <input type="date" name="start-date" required />
    </label>
    <!-- Desired Pay? -->
    <label>
      Desired pay:
      <input
        type="number"
        name="desired-pay"
        placeholder="hourly wage"
        min="15"
        required
      />
    </label>
    <!-- Full-time, Part-time or Seasonal/Temporary? -->
    <fieldset>
      <legend>Employment desired:</legend>
      <p>
        <label>
          <input
            class="radio"
            type="radio"
            name="employment-type"
            value="full-time"
          /> Full-time
        </label>
      </p>
      <p>
        <label>
          <input
            class="radio"
            type="radio"
            name="employment-type"
            value="part-time"
          /> Part-time
        </label>
      </p>
      <p>
        <label>
          <input
            class="radio"
            type="radio"
            name="employment-type"
            value="seasonal"
          /> Seasonal/Temporary
        </label>
      </p>
    </fieldset>

    <!-- Resume Upload -->
    <label>
      Resume (Optional)
      <input type="file" name="resume" />
    </label>
    <!-- Submit Button -->
    <Button />
  </form>
</div>

<style>
  .form-container {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    background: var(--elevated);
    color: var(--elevated-color);
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
  select {
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    box-sizing: border-box;
  }

  label {
    display: block;
    margin-bottom: 1rem;
  }

  fieldset {
    border: none;
    margin-inline: 0;
    padding-inline: 0;
    padding-block: 0;
  }

  .checkbox {
    height: 2rem;
    width: 2rem;
    min-width: auto;
  }

  .radio {
    display: inline-block;
    min-width: auto;
    width: auto;
  }

  .center {
    text-align: center;
  }
</style>
