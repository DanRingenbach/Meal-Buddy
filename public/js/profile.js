function getMeals() {
  fetch("api/meals")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (i = 0; i < data.length; i++) {
        var bigContainer = document.createElement("div");
        bigContainer.setAttribute("class", "row mb-2");
        var innerContainer = document.createElement("div");
        innerContainer.setAttribute("id", `${data[i].day}-meal`);
        innerContainer.setAttribute("class", "col-md-8");
        var elementHeader = document.createElement("h4");
        elementHeader.textContent = data[i].day;
        var mealLink = document.createElement("a");
        mealLink.setAttribute("href", `/meal/${data[i].id}`);
        mealLink.textContent = data[i].name;

        innerContainer.appendChild(elementHeader)
        innerContainer.appendChild(mealLink)

        var buttonContainer = document.createElement('div')
        buttonContainer.setAttribute('class','com-md-4')

        var delButton = document.createElement('button')
        delButton.setAttribute('class', 'btn btn-sm btn-danger')
        delButton.setAttribute('data-id',data[i].id)
        delButton.setAttribute('id',`${data[i].day}-del-button`)
        delButton.textContent = 'DELETE'

        buttonContainer.appendChild(delButton)
        
        bigContainer.appendChild(innerContainer)
        bigContainer.appendChild(buttonContainer)

        document.querySelector('.meal-list').appendChild(bigContainer)

        // if (data[i].day === "Monday") {
        //   console.log(data[i]);
        //   const mondayMeal = document.getElementById("monday-meal");
        //   var mealSpan = document.createElement("span");
        //   var delButton = document.getElementById("mon-del-button");
        //   var mealSpanText = document.createTextNode(data[i].name);
        //   delButton.setAttribute("data-id", data[i].id);
        //   mealSpan.appendChild(mealSpanText);
        //   mondayMeal.appendChild(mealSpan);
        // }

        // if (data[i].day === "Tuesday") {
        //   console.log(data[i]);
        //   const tuesdayMeal = document.getElementById("tuesday-meal");
        //   var delButton = document.getElementById("tues-del-button");
        //   var mealSpan = document.createElement("a");
        //   var mealSpanText = document.createTextNode(data[i].name);
        //   delButton.setAttribute("data-id", data[i].id);
        //   mealSpan.setAttribute("href", "/meal/" + data[i].id + "");
        //   mealSpan.appendChild(mealSpanText);

        //   tuesdayMeal.appendChild(mealSpan);
        // }

        // if (data[i].day === "Wednesday") {
        //   console.log(data[i]);
        //   const wednesdayMeal = document.getElementById("wednesday-meal");
        //   var mealSpan = document.createElement("span");
        //   var delButton = document.getElementById("wed-del-button");
        //   var mealSpanText = document.createTextNode(data[i].name);
        //   delButton.setAttribute("data-id", data[i].id);
        //   mealSpan.appendChild(mealSpanText);
        //   wednesdayMeal.appendChild(mealSpan);
        // }

        // if (data[i].day === "Thursday") {
        //   console.log(data[i]);
        //   const thursdayMeal = document.getElementById("thursday-meal");
        //   var mealSpan = document.createElement("span");
        //   var delButton = document.getElementById("thurs-del-button");
        //   var mealSpanText = document.createTextNode(data[i].name);
        //   delButton.setAttribute("data-id", data[i].id);
        //   mealSpan.appendChild(mealSpanText);
        //   thursdayMeal.appendChild(mealSpan);
        // }

        // if (data[i].day === "Friday") {
        //   console.log(data[i]);
        //   const fridayMeal = document.getElementById("friday-meal");
        //   var mealSpan = document.createElement("span");
        //   var delButton = document.getElementById("fri-del-button");
        //   var mealSpanText = document.createTextNode(data[i].name);
        //   delButton.setAttribute("data-id", data[i].id);
        //   mealSpan.appendChild(mealSpanText);
        //   fridayMeal.appendChild(mealSpan);
        // }

        // if (data[i].day === "Saturday") {
        //   console.log(data[i]);
        //   const saturdayMeal = document.getElementById("saturday-meal");
        //   var mealSpan = document.createElement("span");
        //   var delButton = document.getElementById("sat-del-button");
        //   var mealSpanText = document.createTextNode(data[i].name);
        //   delButton.setAttribute("data-id", data[i].id);
        //   mealSpan.appendChild(mealSpanText);
        //   saturdayMeal.appendChild(mealSpan);
        // }

        // if (data[i].day === "Sunday") {
        //   console.log(data[i]);
        //   const sundayMeal = document.getElementById("sunday-meal");
        //   var mealSpan = document.createElement("span");
        //   var delButton = document.getElementById("sun-del-button");
        //   var mealSpanText = document.createTextNode(data[i].name);
        //   delButton.setAttribute("data-id", data[i].id);
        //   mealSpan.appendChild(mealSpanText);
        //   sundayMeal.appendChild(mealSpan);
        // }
      }
    });
}

const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#meal-name").value.trim();
  const day = document.querySelector("#meal-day").value.trim();
  // const description = document.querySelector('#project-desc').value.trim();

  if (name && day) {
    const response = await fetch(`/api/meals`, {
      method: "POST",
      body: JSON.stringify({ name, day }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create meal");
    }
  }
};

const delButtonHandler = async (event) => {
  event.preventDefault();
  console.log(event.target.getAttribute("data-id"));
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/meals/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete meal");
    }
  }
};

document
  .querySelector(".new-meal-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".meal-list")
  .addEventListener("click", delButtonHandler);
