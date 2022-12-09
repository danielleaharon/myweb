import './email.scss';
import emailjs from '@emailjs/browser';
import axios from 'axios'
import {deviceDetect} from "react-device-detect"

export function sendData() {

  var counter = JSON.parse(localStorage.getItem("counter")) + 1 || 1;
  localStorage.setItem('counter', counter)
  if (JSON.parse(sessionStorage.getItem('send')) !== true) {

  getData().then((data) => {
    var device=deviceDetect();
    var form = document.createElement("form");
    var from_ip = document.createElement("input");
    from_ip.name = 'from_ip';
    from_ip.value = data.IPv4;

    var from_city = document.createElement("input");
    from_city.name = 'from_city';
    from_city.value = data.city;

    var form_counter = document.createElement("input");
    form_counter.name = 'counter';
    form_counter.value = counter;

    var form_device = document.createElement("input");
    form_device.name = 'device';

    var form_browserName = document.createElement("input");
    form_browserName.name = 'browserName';

    if(device.isBrowser){
      form_device.value = 'Browser';
      form_browserName.value = device.browserName;

    }else{
      form_device.value = 'Mobile';
      form_browserName.value = device.model;


    }



    form.appendChild(from_ip)
    form.appendChild(from_city)
    form.appendChild(form_counter)
    form.appendChild(form_device)
    form.appendChild(form_browserName)


    return (form)
  }).then(form => {
    sendEmail(form,'template_8olbpdh');
  })
  }

}
const getData = async () => {
  const res = await axios.get('https://geolocation-db.com/json/')
  return res.data

}

const sendEmail = (form,template) => {
    emailjs.sendForm(process.env.REACT_APP_EMAIL_ID, template, form, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
      .then((result) => {
        sessionStorage.setItem("send", true)

      }, (error) => {
        sessionStorage.setItem("send", false)

      });
  
};

export function sendDataClick(clickOn) {

  getData().then((data) => {
    var device=deviceDetect();
    var form = document.createElement("form");
    var from_ip = document.createElement("input");
    from_ip.name = 'from_ip';
    from_ip.value = data.IPv4;

    var from_city = document.createElement("input");
    from_city.name = 'from_city';
    from_city.value = data.city;

    var form_btn = document.createElement("input");
    form_btn.name = 'form_btn';
    form_btn.value = clickOn;

    var form_device = document.createElement("input");
    form_device.name = 'device';

    var form_browserName = document.createElement("input");
    form_browserName.name = 'browserName';

    if(device.isBrowser){
      form_device.value = 'Browser';
      form_browserName.value = device.browserName;

    }else{
      form_device.value = 'Mobile';
      form_browserName.value = device.model;


    }



    form.appendChild(from_ip)
    form.appendChild(from_city)
    form.appendChild(form_btn)
    form.appendChild(form_device)
    form.appendChild(form_browserName)


    return (form)
  }).then(form => {
    sendEmail(form,'template_juuk0o6');
  })
  

}