import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  partJson = {
    "particles":
    {
      "number":
      {
        "value": 80, "density":
          { "enable": true, "value_area": 800 }
      },
      "color": { "value": "#ffffff" },
      "shape": {
        "type": "circle",
        "stroke": { "width": 0, "color": "#000000" },
        "polygon": { "nb_sides": 5 },
        "image": { "src": "img/github.svg", "width": 100, "height": 100 }
      },
      "opacity": {
        "value": 0.5, "random": false,
        "anim": {
          "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
        }
      },
      "size": {
        "value": 3, "random": true,
        "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
      },
      "line_linked": {
        "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
      },
      "move": {
        "enable": true, "speed": 6, "direction": "none", "random": false,
        "straight": false, "out_mode": "out", "bounce": false,
        "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
      }
    },
    "interactivity": {
      "detect_on": "window", "events": {
        "onhover": {
          "enable": true, "mode": "grab"
        }, "onclick": {
          "enable": false, "mode": "bubble"
        }, "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": { "opacity": 1 }
        },
        "bubble": {
          "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
        },
        "repulse": {
          "distance": 200, "duration": 0.4
        },
        "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 }
      }
    }, "retina_detect": true
  };

  // Create Activity
  butDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  createActivity() {
    document.getElementById("search-activity-form").style.display = "none";
    document.getElementById("create-activity-form").style.display = "block";
    this.modifyClass("is-active", "create-activity-li", "search-activity-li");
    return false;
  }

  searchActivity() {
    document.getElementById("create-activity-form").style.display = "none";
    document.getElementById("search-activity-form").style.display = "block";
    this.modifyClass("is-active", "search-activity-li", "create-activity-li");
    return false;
  }

  modifyClass(className, addToId, removeFromId) {
    document.getElementById(addToId).classList.add(className);
    document.getElementById(removeFromId).classList.remove(className);
  }

  showSearchCompanyName(value) {
    if (value.length > 0 && value != "")
      document.getElementById("search-activivty-company-name").style.display = "block";
  }

  showCompanyName(value) {
    if (value.length > 0 && value != "")
      document.getElementById("add-activivty-company-name").style.display = "block";
  }

  enableField(value) {
    if (value.length > 0) {
      this.butDisabled = false
      // document.getElementById("activity_type").disabled = false;
    }
    if (value != "") {
      if (value != "") {
        this.butDisabled = false;
        // document.getElementById("statuses").disabled = false;
      }

      if (value != "") {
        this.butDisabled = false;
        // document.getElementById("statuses_search").disabled = false;
      }
    }
  }

  addActivity(activity_type, company_id, statuses) {
    if (company_id.value != "" && activity_type.value != ""
      && statuses.value != "") {

      document.getElementById("content-loading").style.display = "block";
      setTimeout(function () {
        document.getElementById("content-loading").style.display = "none";
        document.getElementById("successfully-added-alert").style.display = "block";
      }, 1000);

      setTimeout(function () {
        document.getElementById('successfully-added-alert').style.display = "none";
      }, 5000);
    }
    else {
      document.getElementById("failed-added-alert").style.display = "block";
      setTimeout(function () {
        document.getElementById('failed-added-alert').style.display = "none";
      }, 5000);
    }
  }

  closeAlert() {
    document.getElementById("successfully-added-alert").style.display = "none";
    document.getElementById("failed-added-alert").style.display = "none";
    document.getElementById("successfully-updated-alert").style.display = "none";
  }

  searchForActivity() {
    document.getElementById("results-table").style.display = "none";
    document.getElementById("content-loading").style.display = "block";
    document.getElementById("results-table").classList.remove("slide-up");
    setTimeout(function () {
      document.getElementById("content-loading").style.display = "none";
      document.getElementById("results-table").classList.add("slide-up");
      document.getElementById("results-table").style.display = "block";
    }, 2000);
  }

  showEditModal(rowId) {
    this.updateActivity(rowId);
    document.getElementById("edit-activity-modal").classList.add("is-active");
    // update.value = rowId;
  }

  updateActivity(rowId) {
    // var row = update.rows[rowId];
    // document.getElementById("update-activity-id").innerHTML = row.cells[1].innerHTML;
    // document.getElementById("update-activity-status").innerHTML = row.cells[2].innerHTML;
    // document.getElementById("update-activity-by").innerHTML = row.cells[4].innerHTML;
  }

}
