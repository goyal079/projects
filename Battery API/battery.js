navigator.getBattery().then(function (battery) {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener("chargingchange", function () {
    updateChargeInfo();
  });
  function updateChargeInfo() {
    console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
    document.getElementById("charging").innerText = battery.charging
      ? "Adapter"
      : "Battery";
  }

  battery.addEventListener("levelchange", function () {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    console.log("Battery level: " + battery.level * 100 + "%");
    let perc = Math.round(battery.level * 100);
    document.getElementById("battery").innerText = `${perc}%`;
    let box = document.getElementById("inner-box");
    box.style.width = `${perc}%`;
    if (perc >= 0 && perc <= 15) {
      box.style.backgroundColor = "rgb(240, 9, 55)";
    } else if (perc >= 16 && perc <= 45) {
      box.style.backgroundColor = "#f3cb01";
    } else if (perc >= 46 && perc <= 75) {
      box.style.backgroundColor = "rgb(151, 248, 6)";
    } else if (perc >= 76 && perc <= 100) {
      box.style.backgroundColor = "rgb(6, 196, 6)";
    }
    document.getElementById("level").innerText = `${perc}%`;
  }

  battery.addEventListener("chargingtimechange", function () {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    console.log("Battery charging time: " + battery.chargingTime + " seconds");
  }

  battery.addEventListener("dischargingtimechange", function () {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    console.log(
      "Battery discharging time: " + battery.dischargingTime + " seconds"
    );
  }
});
