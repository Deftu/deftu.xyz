<div class="theme-picker">
    <fieldset>
        <legend class="sr-only">Theme</legend>

        <label for="option-light" class="sr-only">Light</label>
        <input type="radio" name="theme" id="option-light" value="light" />

        <label for="option-dark" class="sr-only">Dark</label>
        <input type="radio" name="theme" id="option-dark" value="dark" />
    </fieldset>
</div>

<style>
    .theme-picker {
        --option-color: none;

        position: absolute;
        top: 0;
        z-index: 999999999;
        width: 100%;
        display: flex;
        margin: 0;
        align-items: center;
        left: 0;
    }

    fieldset {
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 0 0 15px 0;
        gap: 15px;
        color: var(--text);
        background-color: var(--primary);
        width: fit-content;
    }

    input {
        margin: 0;
        padding: 0;
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        outline: 2.5px solid var(--option-color, currentColor);
        outline-offset: 2px;
    }

    input:checked {
        background-color: var(--option-color, currentColor);
    }

    #option-light {
        --option-color: #F3F3F0;
    }

    #option-dark {
        --option-color: #151316;
    }

    .sr-only {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
</style>
