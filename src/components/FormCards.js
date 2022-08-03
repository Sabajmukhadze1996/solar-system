import React from 'react'
import earth_img from "./form-images/earth.png"
import jupiter_img from "./form-images/jupiter.png"
import mars_img from "./form-images/mars.png"
import mercury_img from "./form-images/mercury.png"
import neptune_img from "./form-images/neptune.png"
import pluto_img from "./form-images/pluto.png"
import saturn_img from "./form-images/saturn.png"
import uranus_img from "./form-images/uranus.png"
import venus_img from "./form-images/venus.png"
import { Navbar } from './Navbar'


export const FormCards = ({ifYouAreNotRegistered, ifYouAreNotRegisteredForNavbar}) => {
  return (
<React.Fragment>
  <div className="title-div text-center">
    <h1 id="form-cards-title" style={{fontSize: "2rem", color: "seashell", fontWeight: "300", letterSpacing: "2px", marginBottom: "2.5rem"}}>
       მზის სისტემის პლანეტები
    </h1>
  </div>  

  <div id="form-cards-main-div" className="row row-cols-1 row-cols-sm-2 g-4 mt-3 main-card-div">
  <div className="col">
    <div className="card">
      <img src={mercury_img} className="card-img-top" alt="მერკური" />
      <div className="card-body">
        <h5 className="card-title">მერკური</h5>
        <p className="card-text">მერკური მზესთან ყველაზე ახლოს მდებარე პლანეტა. ის ასევე ყველაზე პატარაა და მისი ორბიტა ყველაზე ექსცენტრიულია მთელ რვა პლანეტას შორის. მისი ორბიტალური პერიოდი 88 დღეს გრძელდება.</p>
      <button onClick={ifYouAreNotRegistered}  className="btn btn-dark">ვრცლად...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={venus_img} className="card-img-top" alt="ვენერა" />
      <div className="card-body">
        <h5 className="card-title">ვენერა</h5>
        <p className="card-text"> ვენერა მეორე პლანეტაა მზიდან და მას ხშირად დედამიწის დობილს უწოდებენ, ვინაიდან ორივე ციური სხეული ერთმანეთს საკმაოდ ემსგავსება სიდიდითა და შემადგენლობით.</p>
        <button onClick={ifYouAreNotRegistered} className="btn btn-dark">ვრცლად...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={earth_img} className="card-img-top" alt="დედამიწა" />
      <div className="card-body">
        <h5 className="card-title">დედამიწა</h5>
        <p className="card-text">დედამიწა მზის სისტემაში მზიდან მესამე პლანეტა. იგი უდიდესია დედამიწის ტიპის პლანეტებს შორის და სამყაროში ცნობილი ერთადერთი ადგილია, რომელიც დასახლებულია ცოცხალი არსებებით.</p>
        <button onClick={ifYouAreNotRegistered} className="btn btn-dark">ვრცლად...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={mars_img} className="card-img-top" alt="მარსი" />
      <div className="card-body">
        <h5 className="card-title">მარსი</h5>
        <p className="card-text">მარსი მეოთხე პლანეტა სიშორითა და მერკურის შემდეგ, ზომით ყველაზე მცირე პლანეტა მზის სისტემაში. მას რომაული ომის ღმერთის მარსის სახელი ჰქვია.</p>
        <button onClick={ifYouAreNotRegistered} className="btn btn-dark">ვრცლად...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={jupiter_img} className="card-img-top" alt="იუპიტერი" />
      <div className="card-body">
        <h5 className="card-title">იუპიტერი</h5>
        <p className="card-text">იუპიტერი მეხუთე პლანეტა მზიდან დაშორებით და მზის სისტემის უდიდესი ციური სხეული. პლანეტა ცნობილია ანტიკური ხანიდან.</p>
        <button onClick={ifYouAreNotRegistered} className="btn btn-dark">ვრცლად...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={saturn_img} className="card-img-top" alt="სატურნი" />
      <div className="card-body">
        <h5 className="card-title">სატურნი</h5>
        <p className="card-text">სატურნი სიშორით მეექვსე პლანეტაა მზიდან. გაზის გიგანტი სიდიდით მეორე პლანეტაა მზის სისტემაში. პლანეტას რომაული ღმერთი სატურნის სახელი ჰქვია.</p>
        <button onClick={ifYouAreNotRegistered} className="btn btn-dark">ვრცლად...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={uranus_img} className="card-img-top" alt="ურანი" />
      <div className="card-body">
        <h5 className="card-title">ურანი</h5>
        <p className="card-text">ურანი მზიდან მეშვიდე პლანეტა დაშორების მიხედვით. ის რადიუსით მესამე, ხოლო მასით მეოთხეა მზის სისტემაში. ურანის შედგენილობა ნეპტუნისას ჰგავს.</p>
        <button onClick={ifYouAreNotRegistered} className="btn btn-dark">ვრცლად...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={neptune_img} className="card-img-top" alt="ნეპტუნი" />
      <div className="card-body">
        <h5 className="card-title">ნეპტუნი</h5>
        <p className="card-text">ნეპტუნი სიშორით მერვე პლანეტა მზიდან და ყველაზე შორეული გაზის გიგანტი ჩვენს მზის სისტემაში. ნეპტუნის ორბიტის კოეფიციენტი 0.011214269 უდრის.</p>
        <button onClick={ifYouAreNotRegistered} className="btn btn-dark">ვრცლად...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={pluto_img} className="card-img-top" alt="პლუტონი" />
      <div className="card-body">
        <h5 className="card-title">პლუტონი</h5>
        <p className="card-text">პლუტონი უმცროსი პლანეტის სახელწოდება: 134340 პლუტონი; სიმბოლოები უდიდესი ობიექტი კოიპერის სარტყელში, მეათე ყველაზე მასიური სხეული.</p>
        <button onClick={ifYouAreNotRegistered} className="btn btn-dark">ვრცლად...</button>
      </div>
    </div>
  </div>
</div>
</React.Fragment>
  )
}
