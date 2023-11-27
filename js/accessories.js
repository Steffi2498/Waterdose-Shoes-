
/*FUNCTION TO LET YOU DESELECT ITEM FROM LIST. I FEEL LIKE IT DOESNT WORK SO DO SOMETHING LATER  */
const dropdown = document.getElementById("filtersSelect");
    let selectedOptions = [];

    dropdown.addEventListener("click", function(event) {
      const clickedOption = event.target;

      if (selectedOptions.includes(clickedOption.value)) {
        // If option is already selected, deselect it after a second click
        const index = selectedOptions.indexOf(clickedOption.value);
        selectedOptions.splice(index, 1);
        clickedOption.selected = false;
      } else {
        // If option is not selected, select it
        selectedOptions.push(clickedOption.value);
        clickedOption.selected = true;
      }
    });
