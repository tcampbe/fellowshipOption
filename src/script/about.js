








function toggle(a, b) {
    // get the text
    var myChange = document.getElementById(a);

    // get the current value of the text's display property
    var displaySetting = myChange.style.display;

    // also get the button, so we can change what it says
    var showHide = document.getElementById(b);

    // now toggle the text and the button text, depending on current state
    if (displaySetting == 'block') {
      // text is visible. hide it
      myChange.style.display = 'none';
      // change button text
      showHide.innerHTML = 'Show';
    }
    else {
      // text is hidden. show it
      myChange.style.display = 'block';
      // change button text
      showHide.innerHTML = 'Hide';
    }
  }