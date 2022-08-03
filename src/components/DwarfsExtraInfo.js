import React from 'react'
import ceres_img from "./home-page-images/ceres.png"
import eris_img from "./home-page-images/eris.png"
import haumea_img from "./home-page-images/haumea.png"
import makemake_img from "./home-page-images/makemake.png"

export const DwarfsExtraInfo = () => {

  return (
<div className="d-flex aling-items-center justify-content-center">
    <div style={{marginTop: "15rem", maxWidth: "660px"}} className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
  <h1 style={{fontSize: "3rem", fontWeight: "600",paddingBottom: "3rem", letterSpacing: "3px"}} className="text-white text-center">ტოპ 4 ჯუჯა პლანეტა</h1>
    <div className="card">
      <img src={ceres_img} className="card-img-top" style={{maxWidth: "300px"}} alt="..." />
      <div className="card-body">
        <h5 style={{fontSize: "1.7rem"}} className="card-title">ცერერა</h5>
        <p style={{fontSize: "1.1rem"}} className="card-text">ასტეროიდული ტიპის ჯუჯა პლანეტა. ცერერა აღმოაჩინა იტალიელმა ასტრონომმა ჯუზეპე პიაციმ 1801 წლის 1 იანვარს. ეს არის ყველაზე მასიური სხეული. დიდი ხნის განმავლობაში ცერერა ითვლებოდა სრულყოფილ პლანეტად, თუმცა შემდგომ მოხდა მისი კლასიფიკაცია როგორც ასტეროიდის, ხოლო საერთაშორისო ასტრონომიული კავშირის 2006 წლის 24 აგვისტოს XXVI საკ-ის გენერალური ასამბლეის გადაწყვეტილებით ცერერა ჩაითვალა ჯუჯა პლანეტად. მისი ეკვატორული დიამეტრია დაახლოებით 980 კმ-ია, ხოლო პოლარული დიამეტრი 910 კმ. მზის ირგვლივ ორბიტაზე 17 882 მ/წმ სიჩქარით მოძრაობს. მზის მხარეს (პერიფელიუმში) ზედაპირის მაქსიმალური ტემპერატურაა -34 °C (239 °K).</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{marginTop: "3rem"}}>
      <img src={eris_img} className="card-img-top" style={{maxWidth: "300px"}} alt="..." />
      <div className="card-body">
        <h5 style={{fontSize: "1.7rem"}} className="card-title">ერისი</h5>
        <p style={{fontSize: "1.1rem"}} className="card-text">ჯუჯა პლანეტა, ნეპტუნსიქითა ობიექტი, რომელიც, თანახმად პალომარის ობსერვატორიის (კალიფორნია) ასტრონომებისა, ზომით პლუტონს აღემატება (რომელიც, თავის მხრივ, 2006 წლის 24 აგვისტომდე პლანეტად ითვლებოდა).
პირველაღმომჩენებმა, შემდგომში კი ნასამ და ზოგიერთმა ასტრონომიულმა ორგანიზაციამ, ეს ობიექტი მზის სისტემის მეათე პლანეტად გამოაცხადეს 2005 წლის იანვარში, თუმცა 2006 წლის 24 აგვისტოს საერთაშორისო ასტრონომიულმა კავშირმა დაამტკიცა პლანეტის განსაზღვრება, რომლის მიხედვით 2003 UB313 ამ სტატუსს არ მოერგო. ეს ობიექტი ჯუჯა პლანეტების კატეგორიას მიეკუთვნა. ოფიციალური სახელის შერჩევის დროს ასევე განიხილებოდა ვარიენტები — ქსენა, ზენა (Xena) და ლილა (Lilah).</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{marginTop: "3rem"}}>
      <img src={haumea_img} className="card-img-top" style={{maxWidth: "300px"}} alt="..." />
      <div className="card-body">
        <h5 style={{fontSize: "1.7rem"}} className="card-title">ჰაუმეა</h5>
        <p style={{fontSize: "1.1rem"}} className="card-text">ჯუჯა პლანეტა (ფორმალურად 136108 Haumea) კოიპერის სარტყელში, მზის სისტემა. პლუტონის მასის დაახ. ერთ-მესამედს შეადგენს. აღმოჩენილ იქნა 2004 წელს კალიფორნიის ტექნიკური ინსტიტუტისა და მაუნა კეას ობსერვატორიის მკვლევართა ჯგუფის მიერ აშშ-ში. 2008 წლის 17 სექტემბერს საერთაშორისო ასტრონომიულმა კავშირმა ჯუჯა პლანეტის კლასიფიკაცია მიანიჭა და ჰავაის ნაყოფიერების ქალღმერთის სახელი "ჰაუმეა" დაარქვა.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{marginTop: "3rem"}}>
      <img src={makemake_img} className="card-img-top" style={{maxWidth: "300px"}} alt="..." />
      <div className="card-body">
        <h5 style={{fontSize: "1.7rem"}} className="card-title">მაკემაკე</h5>
        <p style={{fontSize: "1.1rem"}} className="card-text">სიდიდით მესამე ჯუჯა პლანეტა მზის სისტემაში, კოიპერის სარტყლის ორ უდიდეს ობიექტთაგანი. მისი დიამეტრი დაახ. პლუტონის დიამეტრის ორი-მესამედია. მაკემაკეს თანამგზავრები არ ჰყავს, განსხვავებით კოიპერის სარტყლის სხვა უდიდეს ობიექტთაგან. მისი ექსტრემალურად დაბალი ტემპერატურა −243 °C (დაახლ. 30 °K) მიუთითებს იმაზე, რომ მისი ზედაპირი დაფარულია მეთანისა და ეთანის ყინულით. ეს ობიექტი აღმოაჩინეს 2005 წლის 29 ივლისს სანტასა და ერისთან ერთად.</p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}