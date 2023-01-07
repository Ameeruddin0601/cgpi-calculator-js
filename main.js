let app_form_control = document.getElementById('app-form');
      let app_form_button = document.getElementById('app-form');
      const addsem = () => {
        let addsem = document.getElementById('addsem').value;
        let i = 1;
        let idDictionary = ["semone", "semtwo", "semthree", "semfour", "semfive", "semsix", "semseven", "semeight"];
        let n = idDictionary.length;
        let p = 0;
        let ph_Dictionary = ['Sem 01 SGPA', 'Sem 02 SGPA', 'Sem 03 SGPA', 'Sem 04 SGPA', 'Sem 05 SGPA', 'Sem 06 SGPA', 'Sem 07 SGPA', 'Sem 08 SGPA'];
        let t = ph_Dictionary.length;
        let k = 0;
        //Jitni bhi value addsem me input hogi, utne text box display hoge, with the help of this loop
        while (i <= addsem && addsem <= 8 && p <= n - 1 && k <= t - 1) {
          var newField = document.createElement("input"); //created input box
          newField.setAttribute("name", "array[]");
          newField.setAttribute("type", "text"); //setting attributes
          newField.setAttribute("class", "app-form-control");
          newField.setAttribute("required", "");
          newField.setAttribute("placeholder", `${ph_Dictionary[k]}`);
          k++;
          //console.log(`Item name: ${array1[p]}`);
          newField.setAttribute("id", `${idDictionary[p]}`);
          p++;
          app_form_control.appendChild(newField); //adding the created input box to the parent div element i.e. <div id="app-form-group">
          i++;
        }

        //removing how many sem textbox
        let rem_addsem = document.querySelector('#addsem');
        rem_addsem.parentNode.removeChild(rem_addsem);
        //removing confirm btn
        let rem_confirm = document.querySelector('#confirm')
        rem_confirm.parentNode.removeChild(rem_confirm);
        //adding calculate btn

        if (addsem > 8 || addsem == "") {
          document.getElementById('showData').innerHTML = "Please Enter Number Of Semesters Between 1 to 8";
          let refresh = document.createElement('input');
          refresh.setAttribute('type', 'button');
          refresh.setAttribute('class', 'app-form-button');
          refresh.setAttribute('value', 'refresh');
          app_form_button.appendChild(refresh);
          refresh.onclick = function () {
            document.location.reload(true);
          }
        }

        //calculating values
        if (addsem <= 8 && addsem != "") {
          let calculate = document.createElement('input');
          calculate.setAttribute('type', 'button');
          calculate.setAttribute('class', 'app-form-button');
          calculate.setAttribute('value', 'Calculate');
          calculate.setAttribute('id', 'calculate');
          app_form_button.appendChild(calculate);

          calculate.onclick = function () {
            let sgpa_input_array;
            let totalSGPA = 0;
            let sgpa_inputs = document.getElementsByName('array[]');
            let sgpa_input;
            for (sgpa_input = 0; sgpa_input < sgpa_inputs.length; sgpa_input++) {
              sgpa_input_array = sgpa_inputs[sgpa_input];
              // console.log(sgpa_input_array.value);
              //console.log(sgpa_input_array);
              totalSGPA += +sgpa_input_array.value;
            }

            let perc;
            let grades = "";

            let cgpa = (totalSGPA / sgpa_inputs.length).toFixed(2);

            if (cgpa < 7) {
              perc = (7.1 * cgpa + 12).toFixed(2);
            } else {
              perc = (7.4 * cgpa + 12).toFixed(2);
            }

            if (perc <= 100 && perc >= 80) {
              grades = 'O';
            } else if (perc <= 79.99 && perc >= 75.00) {
              grades = 'A';
            } else if (perc <= 74.99 && perc >= 70.00) {
              grades = 'B';
            } else if (perc <= 69.99 && perc >= 60.00) {
              grades = 'C';
            } else if (perc <= 59.99 && perc >= 50.00) {
              grades = 'D';
            } else if (perc <= 49.99 && perc >= 45.00) {
              grades = 'E';
            } else if (perc <= 44.99 && perc >= 40.00) {
              grades = 'P';
            } else {
              grades = 'F';
            }


            if (perc <= 100 && perc >= 80) {
              document.getElementById('showData').innerHTML = ` Your CGPA is ${cgpa} and percentage is ${perc}% with grade ${grades}. <br>Your performance is Outstanding.`
            } else if (perc <= 79.99 && perc >= 75.00) {
              document.getElementById('showData').innerHTML = ` Your CGPA is ${cgpa} and percentage is ${perc}% with grade ${grades}. <br>Your performance is Excellent.`
            } else if (perc <= 74.99 && perc >= 70.00) {
              document.getElementById('showData').innerHTML = ` Your CGPA is ${cgpa} and percentage is ${perc}% with grade ${grades}. <br>Your performance is Very Good.`
            } else if (perc <= 69.99 && perc >= 60.00) {
              document.getElementById('showData').innerHTML = ` Your CGPA is ${cgpa} and percentage is ${perc}% with grade ${grades}. <br>Your performance is Good.`
            } else if (perc <= 59.99 && perc >= 50.00) {
              document.getElementById('showData').innerHTML = ` Your CGPA is ${cgpa} and percentage is ${perc}% with grade ${grades}. <br>Your performance is Fair.`
            } else if (perc <= 49.99 && perc >= 45.00) {
              document.getElementById('showData').innerHTML = ` Your CGPA is ${cgpa} and percentage is ${perc}% with grade ${grades}. <br>Your performance is Average.`
            } else if (perc <= 44.99 && perc >= 40.00) {
              document.getElementById('showData').innerHTML = ` Your CGPA is ${cgpa} and percentage is ${perc}% with grade ${grades}. <br>You are Passed.`
            } else {
              document.getElementById('showData').innerHTML = ` Your CGPA is ${cgpa} and percentage is ${perc}% with grade ${grades}. <br>You are Fail. `
            }
          }

        }

      }


