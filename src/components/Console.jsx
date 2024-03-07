import React from "react";
import Sidebar from "./Sidebar";
import "./Console.css";
const Console = () => {
  return (
    <>
      <div className="console">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-2">
                <Sidebar />
              </div>
              <div className="col-12 col-lg-6">
                <div className="card my-3 first-card">
                  <div className="card-body">
                    <div className="title d-flex flex-row align-items-center ">
                      <i className="fa-solid fa-circle mx-2"></i>
                      <h3 className="">Welcome to the Console</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates saepe, dolor ipsa omnis et molestiae culpa aut repudiandae hic esse alias soluta sapiente officia non. Culpa nobis eveniet libero et, voluptate in reprehenderit corporis, repudiandae qui suscipit quia nostrum sed. Hic, natus magnam deserunt rem vitae libero ea voluptatibus doloribus esse accusantium quis, dolorem repellat suscipit? Impedit repellendus natus sint temporibus sapiente earum incidunt voluptatum hic, totam corrupti aliquid. Quas minima, dolorum exercitationem nemo repellat aliquid, vero aspernatur labore minus autem sunt qui placeat dolores in magnam nesciunt voluptates, harum sed. In iste aspernatur nisi consectetur reprehenderit voluptate nobis quasi dolor? Eligendi hic in harum, nam, aliquid modi facilis minus, provident alias sequi asperiores accusamus. Delectus asperiores deserunt commodi voluptates perspiciatis eligendi porro ut, voluptate vitae explicabo quos laudantium, quibusdam possimus ducimus et dolor fuga est aperiam. Tempora sapiente laborum hic explicabo aperiam necessitatibus eos autem, eaque mollitia consectetur, eius reprehenderit sit. Esse nulla eaque repellendus ut incidunt enim quibusdam aut blanditiis impedit velit delectus illum eligendi deserunt nesciunt, quas dicta corporis ad minima dolores provident iure doloremque iste. Sequi voluptatem temporibus nobis, omnis reiciendis, unde illo expedita molestiae accusamus assumenda nam neque atque, fuga nemo laboriosam porro sunt ad!
                    </p>
                  </div>
                </div>
                <div className="card my-3">
                  <div className="card-body">
                    <div className="title d-flex flex-row align-items-center ">
                      <i className="fa-solid fa-circle mx-2"></i>
                      <h3 className="">Welcome to the Console</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim dolor eaque accusamus alias at architecto repellat veritatis iure repudiandae laudantium aperiam sit reprehenderit nobis vero autem dicta, impedit doloremque? Porro ea necessitatibus repudiandae optio repellendus. Tenetur maiores atque aliquam nostrum minus laborum quasi architecto quis nemo commodi temporibus, harum, facilis iure blanditiis tempore ad quia quisquam quas dolores distinctio. Beatae accusantium saepe laboriosam dicta vitae fugiat sit necessitatibus iure in, maiores, nulla est, at labore repudiandae consequatur culpa. Tempora, dolorum obcaecati consectetur nostrum aliquam quibusdam quo eum perferendis nihil fugiat inventore unde dicta repellendus recusandae sunt quisquam iusto temporibus. Quos!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card my-3 first-card">
                  <div className="card-body">
                    <h2>Quick Links</h2>
                    <ul>
                      <li>
                        <a href="#">Add a Job</a>
                      </li>
                      <li>
                        <a href="#">View Applications</a>
                      </li>
                      <li>
                        <a href="#">View Students</a>
                      </li>
                      <li>
                        <a href="#">View Companies</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Console;
