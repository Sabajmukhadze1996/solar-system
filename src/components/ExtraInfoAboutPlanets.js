import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import earth_img from "./form-images/earth.png"
import jupiter_img from "./form-images/jupiter.png"
import mars_img from "./form-images/mars.png"
import mercury_img from "./form-images/mercury.png"
import neptune_img from "./form-images/neptune.png"
import pluto_img from "./form-images/pluto.png"
import saturn_img from "./form-images/saturn.png"
import uranus_img from "./form-images/uranus.png"
import venus_img from "./form-images/venus.png"



export const MarsInfo = () => {
    const [marsText, setMarsText] = useState(false);
    const [btnText, setBtnText] = useState("წაკითხვა")
    const [btnColor, setBtnColor] = useState("#1877F2")

    useEffect(() => {
        if (marsText === true) {
          setBtnText("დახურვა")
          setBtnColor("#011F5B")
          window.scrollTo(0, 400)
        } else {
          setBtnText("წაკითხვა")
          setBtnColor("#1877F2")
        }
    }, [marsText])

  return  (
<React.Fragment>
<div className="extra-card-info-main-div">
<div className="card" id="planet-info-cards" style={{margin: "2.5rem auto"}}>
  <h5 style={{fontSize: "2rem"}} className="card-header fw-bold text-center">მარსი - ძვ. ქართული სახელწოდება მარიხი.</h5>
  <div>
    <img id="extra-card-img" className="card-img w-50" src={mars_img} alt="mars"/>
  </div>
  <div className="card-body">
    <h5 style={{fontSize: "1.4rem"}}  className="card-title">მას რომაული ომის ღმერთის მარსის სახელი ჰქვია.</h5>
    <div id="read-more-div" style={{paddingBottom: "1rem"}} className="d-flex justify-content-between align-items-start pt-3">
      <p style={{fontSize: "1.7rem"}} className="card-text">წაიკითხე მეტი ამ პლანეტის შესახებ...</p>
      <button id="read-more-btn" onClick={() => setMarsText(!marsText)} style={{backgroundColor: btnColor}} className="btn btn-primary">
        {btnText}
      </button>
    </div>
    {
      marsText ? 
      <p id="extra-info-paragraph">
         მარსს მეტსახელად ”წითელ პლანეტასაც” უწოდებენ, მისი ზედაპირის მოწითალო შეფერილობის გამო, რაც მაგემიტის (რკინის ოქსიდის) დიდი რაოდენობითაა გამოწვეული.
მარსი დედამიწის ჯგუფის პლანეტებს მიეკუთვნება, მისი ატმოსფერო გაიშვიათებულია (დედამიწასთან შედარებით წნევა მარსის ზედაპირზე 160-ჯერ მცირეა). პლანეტის რელიეფის თავისებურებას წარმოადგენს: მთვარის მსგავსი კრატერები (ისინი მეტეორიტებთან შეჯახებითაა გამოწვეული), ვულკანები, უდაბნოები, ხეობები და დედამიწის მსგავსი პოლარული ყინულის ქუდები.
მარსს ორი ბუნებრივი თანამგზავრი გააჩნია - ფობოსი და დეიმოსი (ბერძნულიდან, "შიში" და "საშინელება", არესის შვილების სახელებია, რომლებიც ომის დროს მუდამ მის გვერდით იმყოფებიან). ორივე თანამგზავრი მცირე ზომისაა (ფობოსი - 26,8×22,4×18,4 კმ, ხოლო დეიმოსი - 15×12,2×10,4 კმ) და უსწორმასწორო ზედაპირი გააჩნია.
პრეფიქსი არეო- მიუთითებს მარსზე ისევე როგორც გეო- მიუთითებს დედამიწაზე, მაგალითად, არეოლოგია/გეოლოგია. არეოლოგია ასევე მიუთითებს მარსის ერთიანად და არა მხოლოდ პლანეტის გეოლოგიური პროცესების შესწავლაზე.
მარსის ასტრონომიული სიმბოლოა ♂, რომელიც ანტიკური ღმერთი მარსის შუბისა და ფარის სიმბოლოა.
ჩინურ, კორეულ, იაპონურ და ვიეტნამურ კულტურებში პლანეტას მოიხსენიებენ როგორც ცეცხლოვან ვარსკვლავს (火星), ძველი ჩინური ხუთი ელემენტის მითოლოგიურ ციკლზე დაყრდნობით.
პლანეტაზე თვეების განმავლობაში ქარიშხლები მძვინვარებს. პლანეტის ფერი მოწითალო, სისხლისფერია. ეს ფერი ძველ ბერძენთა და რომაელთა წარმოდგენაში ომთან და სისხლის ღვრასთან ასოცირდებოდა. სწორედ ამიტომ, ბერძნები და რომაელები ამ პლანეტას ომის ღმერთთან აიგივებდნენ.
      </p>
      : null
    }
    <div className="d-flex align-items-center justify-content-center">
      <NavLink to="/home-page" className="btn btn-dark px-5">მთავარ გვერდზე დაბრუნება</NavLink>
    </div>
    <hr />
  </div>
</div>
</div>
</React.Fragment>
  )
}


export const EarthInfo = () => {
    const [marsText, setMarsText] = useState(false);
    const [btnText, setBtnText] = useState("წაკითხვა")
    const [btnColor, setBtnColor] = useState("#1877F2")

    useEffect(() => {
        if (marsText === true) {
          setBtnText("დახურვა")
          setBtnColor("#011F5B")
          window.scrollTo(0, 400)
        } else {
          setBtnText("წაკითხვა")
          setBtnColor("#1877F2")
        }
    }, [marsText])

  return  (
<React.Fragment>
<div className="extra-card-info-main-div">
<div className="card" id="planet-info-cards" style={{margin: "2.5rem auto"}}>
  <h5 style={{fontSize: "2rem"}} className="card-header fw-bold text-center">იგი უდიდესია დედამიწის ტიპის პლანეტებს შორის.</h5>
  <div>
    <img id="extra-card-img" className="card-img w-50" src={earth_img} alt="mars"/>
  </div>
  <div className="card-body">
    <h5 style={{fontSize: "1.4rem"}}  className="card-title">დედამიწის ზედაპირის უდიდესი ნაწილი წყალს უკავია, მის გარშემო კი ჰაერის გარსი - ატმოსფეროა.</h5>
    <div id="read-more-div" style={{paddingBottom: "2.5rem"}} className="d-flex justify-content-between align-items-start pt-3">
      <p style={{fontSize: "1.7rem"}} className="card-text">წაიკითხე მეტი ამ პლანეტის შესახებ...</p>
      <button id="read-more-btn" onClick={() => setMarsText(!marsText)} style={{backgroundColor: btnColor}} className="btn btn-primary">{btnText}</button>
    </div>
    {
      marsText ?
      <p id="extra-info-paragraph">
       დედამიწა (სიმბოლო: 🜨) — მზის სისტემაში მზიდან მესამე პლანეტა. იგი უდიდესია დედამიწის ტიპის პლანეტებს შორის და სამყაროში ცნობილი ერთადერთი ადგილია, რომელიც დასახლებულია ცოცხალი არსებებით. დედამიწის ზედაპირის უდიდესი ნაწილი წყალს უკავია, მის გარშემო კი ჰაერის გარსი - ატმოსფეროა. იგი დაახლოებით 4,3 მილიარდი წლის წინ წარმოიქმნა და მალევე შეიძინა თავისი ერთადერთი ბუნებრივი თანამგზავრი მთვარე. აგრეთვე დღემდე აღმოჩენილია რამდენიმე კვაზითანამგზავრი. დედამიწაზე ცხოვრობს გონიერი არსება — ადამიანი. 2015 წლის ბოლო მონაცემებით დედამიწაზე 7,6 მილიარდი ადამიანი ცხოვრობს.
       დედამიწის წარმოშობაზე პირველ მოსაზრებებს ჯერ კიდევ ძველი ბერძნები გამოთქვამდნენ, თუმცა ეს მოსაზრებები მეცნიერულად დასაბუთებული არ იყო. XVIII საუკუნეში წამოყენებულ იქნა პირველი მეცნიერული ჰიპოთეზა, რომლის მიხედვითაც იგი კოსმოსური აირებისა და მტვრისგან წარმოიშვა. გამდნარი, გავარვარებული და სწრაფად მბრუნავი მასა ცენტრალური მიზიდულობის ძალით უზარმაზარ სფეროდ იქცა. დროთა განმავლობაში სფერო გაცივდა და მისი ზედაპირი მყარი ქერქით დაიფარა.
       XX საუკუნეში მეცნიერთა მიერ გამოითქვა უამრავი მოსაზრება დედამიწის წარმოშობასთან დაკავშირებით, მაგრამ მიუხედავად ამისა დღემდე ზუსტად არავინ იცის დედამიწის სფეროს წარმოშობის ზუსტი მექანიზმი. ამჟამად მთელ მსოფლიოში ინტენსიურად მიმდინარეობს დედამიწის ამგები ქანების, მთვარიდან ჩამოტანილი მასალისა და მეტეორიტების შესწავლა, აგრეთვე სხვა პლანეტების გამოკვლევა კოსმოსური აპარატების მეშვეობით.
      </p>
      : null
    }
    <div className="d-flex align-items-center justify-content-center">
      <NavLink to="/home-page" className="btn btn-dark px-5">მთავარ გვერდზე დაბრუნება</NavLink>
    </div>
    <hr />
  </div>
</div>
</div>
</React.Fragment>
  )
}


export const JupiterInfo = () => {

    const [marsText, setMarsText] = useState(false);
    const [btnText, setBtnText] = useState("წაკითხვა")
    const [btnColor, setBtnColor] = useState("#1877F2")

    useEffect(() => {
        if (marsText === true) {
          setBtnText("დახურვა")
          setBtnColor("#011F5B")
          window.scrollTo(0, 400)
        } else {
          setBtnText("წაკითხვა")
          setBtnColor("#1877F2")
        }
    }, [marsText])
  return  (
<React.Fragment>
<div className="extra-card-info-main-div">
<div className="card" id="planet-info-cards" style={{margin: "2.5rem auto"}}>
  <h5 style={{fontSize: "2rem"}} className="card-header fw-bold text-center">იუპიტერი ძვ. ქართული სახელწოდება დია ან მუშთარი.</h5>
  <div>
    <img id="extra-card-img" className="card-img w-50" src={jupiter_img} alt="mars"/>
  </div>
  <div className="card-body">
    <h5 style={{fontSize: "1.4rem"}}  className="card-title">სახელწოდება მომდინარეობს ძველი რომაული ღვთაება იუპიტერიდან.</h5>
    <div id="read-more-div" style={{paddingBottom: "2.5rem"}} className="d-flex justify-content-between align-items-start pt-3">
      <p style={{fontSize: "1.7rem"}} className="card-text">წაიკითხე მეტი ამ პლანეტის შესახებ...</p>
      <button id="read-more-btn" onClick={() => setMarsText(!marsText)} style={{backgroundColor: btnColor}} className="btn btn-primary">{btnText}</button>
    </div>
    {
      marsText ?
      <p id="extra-info-paragraph">
         იუპიტერი სიკაშკაშით მეოთხე სხეულია ცაზე (მზის, მთვარისა და ვენერას შემდეგ), თუმცა შიგადაშიგ მარსი იუპიტერზე უფრო მკვეთრად ჩანს. იუპიტერი მზის სისტემის უდიდესი პლანეტაა. მისი ეკვატორული დიამეტრი 142 900 კმ–ია, პოლარული დიამეტრი 133 700 კმ-ია, რაც დაახლოებით 11.2–ჯერ აღემატება დედამიწის ანალოგიურ მაჩვენებლებს. მასით ის 2.5-ჯერ აღემატება მზის სიტემის ყველა დანარჩენ პლანეტათა მასათა ჯამს. ის იმდენად მასიურია, რომ მისი ბარიცენტრი მზესთან მიმართებაში ფაქტობრივად მზის ზედაპირის გარეთ მდებარეობს (1.068 მზიური რადია მზის ცენტრიდან). ის 318-ჯერ მასიურია დედამიწაზე და მისი დიამეტრი დედამიწისას 11-ჯერ, ხოლო მოცულობა 1321-ჯერ აღემატება. ბუნებრივად, იუპიტერის გრავიტაციული ზეგავლენა დომინირებს მზის სისტემის ევოლუციაზე: პლანეტათა უმრავლესობის ორბიტები უფრო ახლოსაა იუპიტერის ორბიტალურ სიბრტყესთან, ვიდრე მზის ეკვატორიალურ სიბრტყესთან. ასევე მცირე პერიოდის კომეტათა უმრავლესობა იუპიტერის ოჯახს ეკუთვნის (შედეგი იუპიტერის მასისა და ფარდობითი სიჩქარისა) და მასვე აკავშირებენ შიდა მზის სისტემის ისტორიის გვიანდელ მძიმე ბომბარდირებასთან. ზოგიერთი მკვლევარის თქმით, იუპიტერის მზის სისტემის მტვერსასრუტია, მისი უზომო გრავიტაციული მიზიდულობის გამო. მისი 63 თანამგზავრიდან ყველაზე დიდია განიმედე.
         იუპიტერზე ავტომატური ხელოვნური თანამგზავრების მისიები დაიწყეს 1973 წლის 3 დეკემბრიდან.
      </p>
      : null
    }
    <div className="d-flex align-items-center justify-content-center">
      <NavLink to="/home-page" className="btn btn-dark px-5">მთავარ გვერდზე დაბრუნება</NavLink>
    </div>
    <hr />
  </div>
</div>
</div>
</React.Fragment>
  )
}


export const MercuryInfo = () => {

    const [marsText, setMarsText] = useState(false);
    const [btnText, setBtnText] = useState("წაკითხვა")
    const [btnColor, setBtnColor] = useState("#1877F2")

    useEffect(() => {
        if (marsText === true) {
          setBtnText("დახურვა")
          setBtnColor("#011F5B")
          window.scrollTo(0, 400)
        } else {
          setBtnText("წაკითხვა")
          setBtnColor("#1877F2")
        }
    }, [marsText])
  return  (
<React.Fragment>
<div className="extra-card-info-main-div">
<div className="card" id="planet-info-cards" style={{margin: "2.5rem auto"}}>
  <h5 style={{fontSize: "2rem"}} className="card-header fw-bold text-center"> მისი ორბიტა ყველაზე ექსცენტრიულია მთელ რვა პლანეტას შორის.</h5>
  <div>
    <img id="extra-card-img" className="card-img w-50" src={mercury_img} alt="mars"/>
  </div>
  <div className="card-body">
    <h5 style={{fontSize: "1.4rem"}}  className="card-title">მისი ორბიტალური პერიოდი 88 დღეს გრძელდება.</h5>
    <div id="read-more-div" style={{paddingBottom: "2.5rem"}} className="d-flex justify-content-between align-items-start pt-3">
      <p style={{fontSize: "1.7rem"}} className="card-text">წაიკითხე მეტი ამ პლანეტის შესახებ...</p>
      <button id="read-more-btn" onClick={() => setMarsText(!marsText)} style={{backgroundColor: btnColor}} className="btn btn-primary">{btnText}</button>
    </div>
    {
      marsText ?
      <p id="extra-info-paragraph">
         მზესთან ყველაზე ახლოს მდებარე პლანეტა. ის ასევე ყველაზე პატარაა და მისი ორბიტა ყველაზე ექსცენტრიულია მთელ რვა პლანეტას შორის. მისი ორბიტალური პერიოდი 88 დღეს გრძელდება (დედამიწის დღე). როდესაც ორჯერ დაასრულებს ორბიტალურ პერიოდს, მერკური ღერძის გარშემო ორჯერ შემობრუნდება. პლანეტას რომაული ღმერთის - მერკურის სახელწოდება აქვს. მერკური ღმერთების შიკრიკი, მედიატორი იყო.
        მერკურის ზედაპირი ძალიან კრატერიანია და გარეგნობით დედამიწის მთვარეს ძალიან ჰგავს. ეს კი იმაზე მიუთითებს, რომ მერკური მილიარდობით წლების განმავლობაში გეოლოგიურად არააქტიური იყო. რადგანაც მერკურის თითქმის არ აქვს ატმოსფერო, რომ სითბო შეინარჩუნოს, მისი ზედაპირი ექსტრემალურ ტემპერატურულ ცვლილებებს იტანს - ღამით -173.15 °C და დღისით 426.85 °C. მერკურის ღერძი ყველა პლანეტის ღერძზე დახრილია, მაგრამ მისი ორბიტალური ექსცენტრისიტეტი უდიდესია. პლანეტაზე სეზონის ცვალებადობა უფრო დამოკიდებულია მისი მზიდან დაშორებაზე, ვიდრე პლანეტის ღერძის დახრილობაზე, რომელიც დედამიწაზე და სხვა პლანეტებზე სეზონის ცვალებადობის ძირითადი გამომწვევი მიზეზია. როდესაც მერკური პერიჰელიუმში იმყოფება, ის მზისგან 2-ჯერ მეტ სითბოს იღებს, ვიდრე აფელიუმში ყოფნისას. რადგანაც პლანეტის სეზონები დამოკიდებულია ორბიტალურ ექსცენტისიტეტზე და არა ღერძული დახრილობაზე, სეზონები ერთმანეთისგან არ განსხვავდებიან არც ერთ ნახევარსფეროზე, ანუ პლანეტის ყველა წერტილში ერთი სეზონია.
      </p>
      : null
    }
    <div className="d-flex align-items-center justify-content-center">
      <NavLink to="/home-page" className="btn btn-dark px-5">მთავარ გვერდზე დაბრუნება</NavLink>
    </div>
    <hr />
  </div>
</div>
</div>
</React.Fragment>
  )
}


export const NeptuneInfo = () => {

    const [marsText, setMarsText] = useState(false);
    const [btnText, setBtnText] = useState("წაკითხვა")
    const [btnColor, setBtnColor] = useState("#1877F2")

    useEffect(() => {
        if (marsText === true) {
          setBtnText("დახურვა")
          setBtnColor("#011F5B")
          window.scrollTo(0, 400)
        } else {
          setBtnText("წაკითხვა")
          setBtnColor("#1877F2")
        }
    }, [marsText])
  return  (
<React.Fragment>
<div className="extra-card-info-main-div">
<div className="card" id="planet-info-cards" style={{margin: "2.5rem auto"}}>
  <h5 style={{fontSize: "2rem"}} className="card-header fw-bold text-center">ნეპტუნი გაზის გიგანტთა შორის ყველაზე მცირეა.</h5>
  <div>
    <img id="extra-card-img" className="card-img w-50" src={neptune_img} alt="mars"/>
  </div>
  <div className="card-body">
    <h5 style={{fontSize: "1.4rem"}}  className="card-title">პლანეტას რომაული ღმერთი ნეპტუნის სახელი ჰქვია.</h5>
    <div id="read-more-div" style={{paddingBottom: "2.5rem"}} className="d-flex justify-content-between align-items-start pt-3">
      <p style={{fontSize: "1.7rem"}} className="card-text">წაიკითხე მეტი ამ პლანეტის შესახებ...</p>
      <button id="read-more-btn" onClick={() => setMarsText(!marsText)} style={{backgroundColor: btnColor}} className="btn btn-primary">{btnText}</button>
    </div>
    {
      marsText ?
      <p id="extra-info-paragraph">
         სიშორით მერვე პლანეტა მზიდან და ყველაზე შორეული გაზის გიგანტი ჩვენს მზის სისტემაში. ნეპტუნის ორბიტის ექსცენტრისიტეტის კოეფიციენტი 0.011214269 უდრის. მიუხედავად იმისა, რომ გაზის გიგანტთა შორის ყველაზე მცირეა, ნეპტუნი ურანზე უფრო მასიურია. მისი მასა დედამიწის 17 მასის ტოლია. ნეპტუნის ზედაპირის მინიმალური ტემპერატურა -218 °C (55 °K). ხოლო მაქსიმალური -196 °C (77 °K). მძლავრი გრავიტაციული ველის გამო მისმა შემადგენელმა გაზმა მაღალი სიმჭიდროვის კომპრესია განიცადა. ვარაუდობენ რომ მის ცენტრში ტემპერატურა 5000 °C. (5273 °K). ნეპტუნი სიდიდით მესამე პლანეტაა (დიამეტრით მეოთხე)
         ნეპტუნის ატმოსფერო შედგება 90 % წყალბადისგან, 19 % ჰელიუმისგან და 1 % სხვა აირებისგან. მისი ეკვატორული დიამეტრი 49 500 კმ-ია, ხოლო პოლარული დიამეტრი 48 700 კმ. ორბიტაზე მოძრაობის სიჩქარეა 5430 მ/წმ, ხოლო მზის ირგვლივ ერთ ბრუნს 164 წელს 9 თვეს და 15 დღეს ანდომებს. თავისი ღერძის გარშემო ბრუნვის პერიოდია: 16 სთ 6 წთ 36 წმ. აფელიუმში მანძილი 4 553 946 490 კმ-ს (30.44125206 ა. ე.) უდრის, პერიფელიუმში 4 452 940 833 კმ-ს (29.76607095 ა. ე.). საშუალო მანძილი 4 503 443 661 კმ-ია (30.10366151 ა. ე.).
        ბოლო დროს ოდნავ შესამჩნევი რუხი რგოლები იქნა შენიშნული ამ ლურჯი პლანეტის ირგვლივ, თუმცა ისინი სატურნისაზე ნაკლებად მასიურია. მათი აღმოჩენისას მიიჩნევდნენ, რომ ეს რგოლები არასრული იყო, მაგრამ ’’ვოიაჯერ-2’’-მა ეს ჰიპოთეზა უარყო. ნეპტუნს ასევე ახასიათებს 2.100 კმ/სთ სიჩქარის წყალბადის, ჰელიუმისა და მეთანის ქარები, რაც მას ლურჯ შეფერილობას აძლევს. ნეპტუნს 13 თანამგზავრი ჰყავს.მისი უდიდესი თანამგზავრი ტრიტონი გამოირჩევა რეტროგრადული ორბიტით, ექსტრემალურად ცივია -235 °C (38 °K) და მას ექსტრემალურად შეკუმშული (14 მიკრობარი) ნიგროგენ/მეთანის ატმოსფერო აქვს.
      </p>
      : null
    }
    <div className="d-flex align-items-center justify-content-center">
      <NavLink to="/home-page" className="btn btn-dark px-5">მთავარ გვერდზე დაბრუნება</NavLink>
    </div>
    <hr />
  </div>
</div>
</div>
</React.Fragment>
  )
}


export const PlutoInfo = () => {

    const [marsText, setMarsText] = useState(false);
    const [btnText, setBtnText] = useState("წაკითხვა")
    const [btnColor, setBtnColor] = useState("#1877F2")

    useEffect(() => {
        if (marsText === true) {
          setBtnText("დახურვა")
          setBtnColor("#011F5B")
          window.scrollTo(0, 400)
        } else {
          setBtnText("წაკითხვა")
          setBtnColor("#1877F2")
        }
    }, [marsText])
  return  (
<React.Fragment>
<div className="extra-card-info-main-div">
<div className="card" id="planet-info-cards" style={{margin: "2.5rem auto"}}>
  <h5 style={{fontSize: "2rem"}} className="card-header fw-bold text-center">პლუტონის სახელი წყალქვეშა ღმერთის სახელია.</h5>
  <div>
    <img id="extra-card-img" className="card-img w-50" src={pluto_img} alt="mars"/>
  </div>
  <div className="card-body">
    <h5 style={{fontSize: "1.4rem"}}  className="card-title">მეორე ყველაზე მასიური ჯუჯა პლანეტა ერისის შემდეგ.</h5>
    <div id="read-more-div" style={{paddingBottom: "2.5rem"}} className="d-flex justify-content-between align-items-start pt-3">
      <p style={{fontSize: "1.7rem"}} className="card-text">წაიკითხე მეტი ამ პლანეტის შესახებ...</p>
      <button id="read-more-btn" onClick={() => setMarsText(!marsText)} style={{backgroundColor: btnColor}} className="btn btn-primary">{btnText}</button>
    </div>
    {
      marsText ?
      <p id="extra-info-paragraph">
          პლუტონი (უმცროსი პლანეტის სახელწოდება: 134340 პლუტონი; სიმბოლოები: ⯓[15] ან ♇[16]) — უდიდესი ობიექტი კოიპერის სარტყელში, მეათე ყველაზე მასიური სხეული, რომელიც მზის გარშემო ბრუნავს, და მეორე ყველაზე მასიური ჯუჯა პლანეტა ერისის შემდეგ. კოიპერის სარტყლის სხვა ობიექტების მსგავსად პლუტონიც ძირითადად ქვისა და ყინულისაგან შედგება[17] და შედარებით პატარაა: დაახლოებით მთვარის მასის 1/6 და მოცულობის 1/3. მისი ორბიტა ექსცენტრიული და ძალზე დახრილია. პლუტონი მზიდან 30-დან (პერიჰელიუმი) 49 (აფელიუმი) ასტრონომიულ ერთეულამდეა დაშორებული. აქედან გამომდინარე, პლუტონი პერიოდულად მზეს უფრო უახლოვდება, ვიდრე ნეპტუნი, მაგრამ ორბიტალური რეზონანსი ნეპტუნთან იცავს სხეულებს შეჯახებისაგან. 2014 წელს ის მზიდან 32,6 ასტრონომიული ერთეულით იყო დაშორებული. მზიდან წამოსულ სინათლეს 5,5 საათი სჭირდება პლუტონამდე მისაღწევად, როდესაც ის საშუალო მანძილზეა (39,4 ა.ე.).[18]
          პლუტონი 1930 წელს აღმოაჩინეს და თავდაპირველად მზიდან მეცხრე პლანეტად იყო მიჩნეული. მისი მთავარი პლანეტის სტატუსი ეჭვქვეშ დადგა მისი და გარე მზის სისტემის უფრო ღრმა, 75 წლიანი შესწავლის შემდეგ. 1977 წლიდან მოყოლებული მცირე პლანეტა ქირონის აღმოჩენასთან ერთად პლუტონის მსგავსი მრავალი ყინულოვანი ობიექტი აღმოაჩინეს ექსცენტრიული ორბიტებით.[19] მიმოფანტული დისკოს ობიექტი ერისი, რომელიც 2005 წელს აღმოაჩინეს, პლუტონზე 27%-ით მასიურია.[20] იმის გააზრებამ, რომ პლუტონი ერთ-ერთია გარე მზის სისტემაში მდებარე დიდი ყინულოვანი ობიექტებიდან, საერთაშორისო ასტრონომიულ კავშირს ბიძგი მისცა, რომ ოფიციალურად განემარტათ „პლანეტა“ 2006 წელს. ამ განმარტებამ პლუტონს პლანეტის სტატუსი ჩამოართვა და რეკლასიფიცირდა „ჯუჯა პლანეტების“ კატეგორიაში (კონკრეტულად კი პლუტოიდად).[21] ის ასტრონომები, რომლებიც ეწინააღდმეგებიან ამ გადაწყვეტილებას, თვლიან, რომ პლუტონი პლანეტად უნდა დარჩეს და, მეტიც, სხვა ჯუჯა პლანეტები და მთვარეებიც კი უნდა დაემატოს პლანეტების სიას პლუტონთან ერთად.[22][23][24]
      </p>
      : null
    }
    <div className="d-flex align-items-center justify-content-center">
      <NavLink to="/home-page" className="btn btn-dark px-5">მთავარ გვერდზე დაბრუნება</NavLink>
    </div>
    <hr />
  </div>
</div>
</div>
</React.Fragment>
  )
}


export const SaturnInfo = () => {

    const [marsText, setMarsText] = useState(false);
    const [btnText, setBtnText] = useState("წაკითხვა")
    const [btnColor, setBtnColor] = useState("#1877F2")

    useEffect(() => {
        if (marsText === true) {
          setBtnText("დახურვა")
          setBtnColor("#011F5B")
          window.scrollTo(0, 400)
        } else {
          setBtnText("წაკითხვა")
          setBtnColor("#1877F2")
        }
    }, [marsText])
  return  (
<React.Fragment>
<div className="extra-card-info-main-div">
<div className="card" id="planet-info-cards" style={{margin: "2.5rem auto"}}>
  <h5 style={{fontSize: "2rem"}} className="card-header fw-bold text-center">სატურნი ძვ. ქართული სახელწოდება კრონოსი ან ზუალი.</h5>
  <div>
    <img id="extra-card-img" className="card-img w-50" src={saturn_img} alt="mars"/>
  </div>
  <div className="card-body">
    <h5 style={{fontSize: "1.4rem"}}  className="card-title">პლანეტას რომაული ღმერთი სატურნის სახელი ჰქვია.</h5>
    <div id="read-more-div" style={{paddingBottom: "2.5rem"}} className="d-flex justify-content-between align-items-start pt-3">
      <p style={{fontSize: "1.7rem"}} className="card-text">წაიკითხე მეტი ამ პლანეტის შესახებ...</p>
      <button id="read-more-btn" onClick={() => setMarsText(!marsText)} style={{backgroundColor: btnColor}} className="btn btn-primary">{btnText}</button>
    </div>
    {
      marsText ?
      <p id="extra-info-paragraph">
          ეს გაზის გიგანტი სიდიდით მეორე პლანეტაა მზის სისტემაში იუპიტერის შემდეგ. პლანეტას რომაული ღმერთი სატურნის სახელი ჰქვია. მისი სიმბოლოა ღმერთის კვერთხის სტილიზებული რეპრეზენტაცია - ♄. ჩინურ, კორეულ, იაპონურ და ვეიტნამურ კულტურებში პლანეტას მიწის ვარსკვლავად მოიხსენიებენ (土星), ხუთი ელემენტის ციკლის მიხედვით. სატურნს ადრე სანამ ტელესკოპს გამოიგონებდნენ ყურებიან პლანეტას ეძახდნენ, რადგან შორიდან მისი რგოლები ყურებს ჰგავდა.
          სატურნის პირველი ფოტოსურათი პიონერ 11 -მა 1979 წლის სექტემბერში გადაიღო 20 000 კმ-ის მანძილიდან. მაშინ აგრეთვე მისი რამდენიმე თანამგზავრი აღმოაჩინა და სურათები გადაუღო. ნასას 2016 წლის მონაცემებით სატურნს 82 თანამგზავრი ჰყავს,[8] მათ შორის ყველაზე დიდია ტიტანი. სატურნის ატმოსფეროს 96,3 % წყალბადისგან შედგება, 3,25 % ჰელიუმისგან, დანარჩენი 0,45 % სხვა აირებია.
          სატურნი აფელიუმში მზიდან 1 513 325 783 კმ-ზე (10.11595804 ა.ე.) იმყოფება, ხოლო პერიფელიუმში 1 353 572 956 კმ (9.04807635 ა.ე.). მზიდან საშუალო დაშორების მანძილია 1 433 449 370 კმ (9.58201720 ა. ე.). სიდერული ბრუნვის პერიოდია 10 სთ 34 წთ. ორბიტაზე მოძრაობის სიდერული პერიოდია 29 წელი 5 თვე 15 დღე. ორბიტის ექსცენტრისიტეტია 0.055723219. მისი ეკვატორული დიამეტრია 120 540 კმ, ხოლო პოლარული დიამეტრი 108 730 კმ. მზის ირგვლივ ორბიტაზე მოძრაობის სიჩქარეა 9690 მ/წმ. მისი მასა 95 დედამიწის მასის ტოლია. გარე ღრუბლების ფენის მაქსიმალური ტემპერატურაა -139 °C (134 °K), მინიმალური -190 °C (83 °K).
      </p>
      : null
    }
    <div className="d-flex align-items-center justify-content-center">
      <NavLink to="/home-page" className="btn btn-dark px-5">მთავარ გვერდზე დაბრუნება</NavLink>
    </div>
    <hr />
  </div>
</div>
</div>
</React.Fragment>
  )
}


export const UranusInfo = () => {


    const [marsText, setMarsText] = useState(false);
    const [btnText, setBtnText] = useState("წაკითხვა")
    const [btnColor, setBtnColor] = useState("#1877F2")

    useEffect(() => {
        if (marsText === true) {
          setBtnText("დახურვა")
          setBtnColor("#011F5B")
          window.scrollTo(0, 400)
        } else {
          setBtnText("წაკითხვა")
          setBtnColor("#1877F2")
        }
    }, [marsText])
  return  (
<React.Fragment>
<div className="extra-card-info-main-div">
<div className="card" id="planet-info-cards" style={{margin: "2.5rem auto"}}>
  <h5 style={{fontSize: "2rem"}} className="card-header fw-bold text-center">ურანის ატმოსფეროს რთულ ფენებიანი ღრუბლის სტრუქტურა აქვს.</h5>
  <div>
    <img id="extra-card-img" className="card-img w-50" src={uranus_img} alt="mars"/>
  </div>
  <div className="card-body">
    <h5 style={{fontSize: "1.4rem"}}  className="card-title">ურანი ერთადერთი პლანეტაა, რომლის სახელიც ბერძნული მითოლოგიიდან მოდის და არა რომაულიდან.</h5>
    <div id="read-more-div" style={{paddingBottom: "2.5rem"}} className="d-flex justify-content-between align-items-start pt-3">
      <p style={{fontSize: "1.7rem"}} className="card-text">წაიკითხე მეტი ამ პლანეტის შესახებ...</p>
      <button id="read-more-btn" onClick={() => setMarsText(!marsText)} style={{backgroundColor: btnColor}} className="btn btn-primary">{btnText}</button>
    </div>
    {
      marsText ?
      <p id="extra-info-paragraph">
         ურანი — მზიდან მეშვიდე პლანეტა დაშორების მიხედვით. ის რადიუსით მესამე, ხოლო მასით მეოთხეა მზის სისტემაში. ურანის შედგენილობა ნეპტუნისას ჰგავს, ხოლო ეს ორი პლანეტა გაზური გიგანტებისგან, იუპიტერისა და სატურნისგან განსხვავებულია, ამიტომაც ასტრონომები ურანსა და ნეპტუნს განცალკევებულ კატეგორიაში — „ყინულის გიგანტებში“ მოიხსენიებენ. მიუხედავად იმისა, რომ ურანის ატმოსფერო წყალბადისა და ჰელიუმის ძირითადი შედგენილობით სატურნსა და იუპიტერს წააგავს, ის შეიცავს უფრო მეტ „ყინულს“, როგორებიცაა ამიაკი და მეთანი, სხვა ჰიდროკარბონებთან ერთად.[6] მისი ატმოსფერო ყველაზე ცივია მზის სისტემაში ტემპერატურით −224,2 °C. ურანის ატმოსფეროს რთულ ფენებიანი ღრუბლის სტრუქტურა აქვს და მეცნიერთა ვარაუდით, მის ძირეულ ღრუბლებში წყალია, ხოლო ყველაზე მაღალ ღრუბლებში — მეთანი.[6] ამის საპირისპიროდ, ურანის შიდა ნაწილები ძირითადად გაჯერებულია ყინულითა და ქვით.[7]
        ურანი ერთადერთი პლანეტაა, რომლის სახელიც ბერძნული მითოლოგიიდან მოდის და არა რომაულიდან, განსხვავებით სხვა პლანეტებისა. მას ცის ბერძენი ღმერთის ლათინური ვერსიის, ურანის (Ouranos) სახელი ჰქვია. სხვა გიგანტი პლანეტების მსგავსად, ურანსაც აქვს რგოლების სისტემა, მაგნიტოსფერო და რამდენიმე თანამგზავრი. ურანისეულ სისტემას ამ პლანეტათა შორის უნიკალური კონფიგურაცია აქვს, რადგან მისი ბრუნვის ღერძი თითქმის „მხარზეა წამოწოლილი“. აქედან გამომდინარე, მისი ჩრდილოეთ და სამხრეთ პოლუსები იქ არის, სადაც სხვა პლანეტების ეკვატორები.[8] 1986 წელს „ვოიაჯერ 1-ის“ მიერ გადაღებულ სურათებზე ხილულ სინათლეში ურანი თითქმის ნიშან-თვისებების გარეშე გამოჩნდა — ღრუბლების ჯგუფებისა და შტორმების გარეშე, რომლებიც სხვა გიგანტ პლანეტებთან ასოცირდება.[8] დამკვირვებლებმა დედამიწიდან შენიშნეს სეზონური ცვლილების ნიშნები და ამინდის გაზრდილი აქტიურობა, როდესაც ურანმა ბუნიაობას მიაღწია. ურანზე ქარები 250 მ/წმ სიჩქარით ქრის.[9]
      </p>
      : null
    }
    </div>
    <div>
    <div className="d-flex align-items-center justify-content-center">
      <NavLink to="/home-page" className="btn btn-dark px-5">მთავარ გვერდზე დაბრუნება</NavLink>
    </div>
    <hr />
  </div>
</div>
</div>
</React.Fragment>
  )
}


export const VenusInfo = () => {

    const [marsText, setMarsText] = useState(false);
    const [btnText, setBtnText] = useState("წაკითხვა")
    const [btnColor, setBtnColor] = useState("#1877F2")

    useEffect(() => {
        if (marsText === true) {
          setBtnText("დახურვა")
          setBtnColor("#011F5B")
          window.scrollTo(0, 400)
        } else {
          setBtnText("წაკითხვა")
          setBtnColor("#1877F2")
        }
    }, [marsText])
  return  (
<React.Fragment>
<div className="extra-card-info-main-div">
<div className="card" id="planet-info-cards" style={{margin: "2.5rem auto"}}>
  <h5 style={{fontSize: "2rem"}} className="card-header fw-bold text-center">ვენერა ძვ. ქართული სახელწოდება  ხარიპარია, ცისკრის ვარსკვლავი.</h5>
  <div>
    <img id="extra-card-img" className="card-img w-50" src={venus_img} alt="mars"/>
  </div>
  <div className="card-body">
    <h5 style={{fontSize: "1.4rem"}}  className="card-title">პლანეტას რომაელი სიყვარულის ქალღმერთის ვენერას სახელი ჰქვია.</h5>
    <div id="read-more-div" style={{paddingBottom: "2.5rem"}} className="d-flex justify-content-between align-items-start pt-3">
      <p style={{fontSize: "1.7rem"}} className="card-text">წაიკითხე მეტი ამ პლანეტის შესახებ...</p>
      <button id="read-more-btn" onClick={() => setMarsText(!marsText)} style={{backgroundColor: btnColor}} className="btn btn-primary">{btnText}</button>
    </div>
    {
      marsText ?
      <p id="extra-info-paragraph">
           მეორე პლანეტაა მზიდან და მას ხშირად დედამიწის დობილს უწოდებენ, ვინაიდან ორივე ციური სხეული ერთმანეთს საკმაოდ ემსგავსება სიდიდითა და შემადგენლობით. პლანეტას რომაელი სიყვარულის ქალღმერთის ვენერას სახელი ჰქვია.
          ვენერას ზედსართავი სახელი "ვენერიულია", თუმცა მისი ამგვარი ფორმით გამოყენებისგან თავს იკავებენ, ამ სიტყვის თანამედროვე ტერმინოლოგიაში სქესობრივი გზით გადამდებ დაავადებებთან ასოციაციის გამო. ამის ნაცვლად ზოგიერთი ასტრონომი იყენებს ზედსართავს "სითერიული", რომელიც მომდინარეობს "სითერეა"-დან, ძველ ბერძნულ მითოლოგიაში აფროდიტეს ალტერნატიული სახელი.
          ჩინურ, კორეულ, იაპონურ და ვიეტნამურ კულტურებში პლანეტას მოიხსენიებენ ლითონის ვარსკვლავად (金星), ხუთ ელემენტზე დაყრდნობით.
          ვენერა დედამიწას ყველა სხვა პლანეტაზე მეტად უახლოვდება ხოლმე. ეძახიან ”მწუხრის ვარსკვლავსაც”” და ”ცისკრის ვარსკვლავსაც””, რადგან მისი დანახვა ხან დაისის შემდეგ შეიძლება, ხან განთიადის წინ. იგი იმდენად ნათელი და კაშკაშაა, ხშირად ამოუცნობი მფრინავი ობიექტი (ამო, ”მფრინავი თეფში”) ჰგონიათ. ვენერას თეთრი ღრუბლების სქელი ფენა ფარავს. ზედაპირზე ტემპერატურა 470 ºC-ს აღწევს. მასზე ნაკლებადაა კოსმოსური სხეულის ნაკვალევი - კრატერები, რადგან კოსმოსური სხეულები უმეტესწილად ვენერას ატმოსფეროში შეჭრისთანავე იწვის მისი დიდი სიმკვრივის გამო. ზედაპირი დაფარულია ”ბებერი” ვულკანებითა და ლავით.
          ვენერას წელიწადი დედამიწის 7,5 თვის ტოლია. იგი თავისი ღერძის გარშემო პლანეტების უმეტესობასთან შედარებით პირუკუ ტრიალებს. მეცნიერები ამ მოვლენის მიზეზს დამაჯერებლად ვერ ხსნიან. ვენერას ღერძული ბრუნვა რეკორდულად ნელია - მისი პერიოდი დედამიწის 243 დღე-ღამეს უდრის. მზის ირგვლივ ორბიტაზე 35 020 მ/წმ სიჩქარით მოძრაობს. მისი დიამეტრი 12 104 კმ-ია. მზის ირგვლივ ერთ ბრუნს ასრულებს 7 თვესა და 12 დღეში. აფელიუმში მზიდან 108 942 109 კმ-ით (0.728 231 28 ა.ე.) არის დაშორებული, პერიფელიუმში 107 476 259 კმ-ია (0.718 432 70), საშუალო მანძილი არის 108 208 930 კმ (0.723 332). ვენერას ორბიტა თითქმის წრეა, ექსცენტრისიტეტი 0.0068 უდრის.
      </p>
      : null
    }
    <div>
    </div>
    <div className="d-flex align-items-center justify-content-center">
      <NavLink to="/home-page" className="btn btn-dark px-5">მთავარ გვერდზე დაბრუნება</NavLink>
    </div>
    <hr />
  </div>
</div>
</div>
</React.Fragment>
  )
}
