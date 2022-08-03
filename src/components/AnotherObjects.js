import React from 'react'
import bennu_img from "./home-page-images/bennu-asteroid.png"
import zephyr_img from "./home-page-images/zephyr-asteroid.png"
import mithra_img from "./home-page-images/mithra-asteroid.png"
import florence_img from "./home-page-images/florence-asteroid.png"
import cuno_img from "./home-page-images/cuno-asteroid.png"

export const AnotherObjects = () => {
  return (
<div className="d-flex aling-items-center justify-content-center">
    <div style={{marginTop: "15rem", maxWidth: "700px"}} className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col" >
    <h1 style={{fontSize: "3rem", fontWeight: "600",paddingBottom: "3rem", letterSpacing: "3px"}} className="text-white text-center">ტოპ 5 ასტეროიდი</h1>
    <div className="card">
      <img  src={bennu_img} className="card-img-top" style={{maxWidth: "250px"}} alt="..." />
      <div className="card-body">
        <h5 style={{fontSize: "1.7rem"}} className="card-title">ასტეროიდი - ბენუსი</h5>
        <ul style={{listStyleType: "none"}}>
           <li><span>რადიუსი:</span>&nbsp;&nbsp;262,5 m</li>
           <li><span>მასა:</span>&nbsp;&nbsp;7,8E10 kg</li>
           <li><span>ორბიტალური პერიოდი:</span>&nbsp;&nbsp; 436 დღე</li>
           <li><span>მიზიდულობა:</span>&nbsp;&nbsp; 0,00009807 m/s²</li>
           <li><span>Spectral type:</span>&nbsp;&nbsp; B-type asteroid</li>
           <li><span>ორბიტაზეა:</span>&nbsp;&nbsp; მზე</li>
           <li><span>ასტეროიდების ჯგუფი:</span>&nbsp;&nbsp; Apollo asteroid</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="col" >
    <div className="card">
      <img  src={zephyr_img} className="card-img-top" style={{maxWidth: "250px"}} alt="..." />
      <div className="card-body">
        <h5 style={{fontSize: "1.7rem"}} className="card-title">ასტეროიდი - ზეფირი</h5>
        <ul style={{listStyleType: "none"}}>
           <li><span>ორბიტალური პერიოდი: </span>&nbsp;&nbsp;1 004 დღე</li>
           <li><span>აღმოჩენილია:</span>&nbsp;&nbsp;11 აპრილი, 1999</li>
           <li><span>აბსოლუტური სიდიდე:</span>&nbsp;&nbsp;15,8</li>
           <li><span>ორბიტაზეა: </span>&nbsp;&nbsp; მზე</li>
           <li><span>ასტეროიდების ჯგუფი: </span>&nbsp;&nbsp; Apollo asteroid</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="col" >
    <div className="card">
      <img  src={mithra_img} className="card-img-top" style={{maxWidth: "250px"}} alt="..." />
      <div className="card-body">
        <h5 style={{fontSize: "1.7rem"}} className="card-title">ასტეროიდი - მითრა</h5>
        <ul style={{listStyleType: "none"}}>
           <li><span>ორბიტალური პერიოდი:</span>&nbsp;&nbsp;1 190 დღე</li>
           <li><span>აღმოჩენილია:</span>&nbsp;&nbsp;22 სექტემბერი, 1987</li>
           <li><span>აბსოლუტური სიდიდე:</span>&nbsp;&nbsp; 15,6</li>
           <li><span>ორბიტაზეა:</span>&nbsp;&nbsp;  მზე</li>
           <li><span>ასტეროიდების ჯგუფი: </span>&nbsp;&nbsp; Apollo asteroid</li>
        </ul>
      </div>
    </div>
  </div>


  <div className="col" >
    <div className="card">
      <img  src={florence_img} className="card-img-top" style={{maxWidth: "250px"}} alt="..." />
      <div className="card-body">
        <h5 style={{fontSize: "1.7rem"}} className="card-title">ასტეროიდი - ფლორენცია</h5>
        <ul style={{listStyleType: "none"}}>
           <li><span>რადიუსი:</span>&nbsp;&nbsp; 2,45 km</li>
           <li><span>ორბიტალური პერიოდი: </span>&nbsp;&nbsp;858 დღე</li>
           <li><span>აღმოჩენილია:</span>&nbsp;&nbsp; 2 მარტი, 1981</li>
           <li><span>ორბიტაზეა: </span>&nbsp;&nbsp;  მზე</li>
           <li><span>ასტეროიდების ჯგუფი:</span>&nbsp;&nbsp; Amor asteroid</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="col" >
    <div className="card">
      <img  src={cuno_img} className="card-img-top" style={{maxWidth: "250px"}} alt="..." />
      <div className="card-body">
        <h5 style={{fontSize: "1.7rem"}} className="card-title">ასტეროიდი - ქუნო</h5>
        <ul style={{listStyleType: "none"}}>
           <li><span>ორბიტალური პერიოდი:</span>&nbsp;&nbsp; 1 019 დღე</li>
           <li><span>ორბიტაზეა:</span>&nbsp;&nbsp; მზე</li>
           <li><span>აღმოჩენილია:</span>&nbsp;&nbsp;  5 ივნისი, 1959</li>
           <li><span>აბსოლუტური სიდიდე:</span>&nbsp;&nbsp; 14,4</li>
           <li><span>ასტეროიდების ჯგუფი:</span>&nbsp;&nbsp; Apollo asteroid</li>
        </ul>
      </div>
    </div>
  </div>

</div>
</div>
  )
}