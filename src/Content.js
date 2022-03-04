import map from "./map.jpg";
import handshake from "./handshake.jpg"
import explore from "./explore.png"
import formik from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Content() {
    return(
        <div className="em1">
            <section className="ftco-section ftco-no-pt bg-light">
                <div className="container">
                    <div className="row no-gutters mt-5">
                        <div className="col col-12 d-flex align-items-center">
                        <section className="container w-350 ftco-animate bg-primary">
                            <form  noValidate  >
                            <div class="form-group">
                            <label class="label">Car Model</label>
                            <select class="form-control" name="model" id="model" placeholder="Accord,Audi Q3 etc">
                                <option value="Audi">Audi</option>;
                                <option value="BMW">BMW</option>
                                <option value="Ford">Ford</option>
                                <option value="Ferrari">Ferrari</option>
                            </select>
                            </div>
                            <div class="form-group">
                            <label for="color" class="label">Car Color</label><br />
                            <input type="color" name="color" class="form-control" id="color" />
                            </div>
                            <div class="form-group">
                            <label for="cost" class="label">Cost </label><br />
                            <input type="number" name="cost" id="cost" class="form-control" placeholder="30,40,50,60 ..." />
                            </div>
                            <div class="form-group">
                            <label for="Id" class="label">Car Id</label>
                            <input type="number" name="id" id="Id" class="form-control" placeholder="Car Id" />
                            </div>
                            <div class="form-group text-center">
                            <input type="submit" value="Rent A Car Now" onclick="add()" class="btn btn-success py-3 px-4" />
                            </div>
                            </form>
                        </section>
                        <div className="col-9 d-flex align-items-center ">
                                <div className="services-wrap rounded-right w-100">
                                <h3 className="heading-section mb-4 text-center">Car Rental Application</h3>
                                <div className="row d-flex mb-4">
                                    <div className="col-md-4 d-flex align-self-stretch ftco-animate ml-2">
                                    <div className="services w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center ">
                                            <span><i><img src={map} /></i></span></div>
                                        <div className="text w-100">
                                        <h3 className="heading mb-2">Location</h3>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                                    <div className="services w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span><i><img src={handshake}/></i></span></div>
                                        <div className="text w-100">
                                        <h3 className="heading mb-2">Select the Best Deal</h3>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                                    <div className="services w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span><i><img src={explore} /></i></span></div>
                                        <div className="text w-100">
                                        <h3 className="heading mb-2">Reserve Your Car</h3>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}
export default Content;