
import { ImagePath } from "../../../themes/ImagePath"
import Bottomcard from "../ui/bottomcard"
import Topcard from "../ui/topcard"
import Datatable from "../ui/datatable"
import Button from "./Button"

const maincontent  = () => {
  return (

      <section className="main-content-wrap">
        <div className="top-card-wrap">
          <ul>
            <li>
              <Topcard
            icon={ImagePath.topcardicon1}
            title='1000'
            description='Total Private Seller'
            />
            </li>
            <li>
              <Topcard
            icon={ImagePath.topcardicon2}
            title='950'
            description='Total Agent Seller'
            />
            </li>
            <li>
              <Topcard
            icon={ImagePath.topcardicon3}
            title='1100'
            description='Total Support Users'
            />
            </li>
            <li>
              <Topcard
            icon={ImagePath.topcardicon4}
            title='750'
            description='Total Edit Desk Users'
            />
            </li>
            <li>
              <Topcard
            icon={ImagePath.topcardicon5}
            title='1500'
            description='Total Company Users'
            />
            </li>
            <li>
              <Topcard
            icon={ImagePath.topcardicon6}
            title='5'
            description='Total Plans'
            />
            </li>
            <li>
              <Topcard
            icon={ImagePath.topcardicon7}
            title='15'
            description='Total Add-On Plans'
            />
            </li>
          </ul>
        </div>
        <div className="chart-sec-wrap sky-bg bg-adj">
          <div className="row">
            <div className="col-lg-12">
              <h2>Quick Analysis</h2>
            </div>
            <div className="col-lg-6">
              <div className="chart-img">
                <img src={ImagePath.chart1} alt="Chart Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="chart-img">
                <img src={ImagePath.chart2} alt="Chart Image" />
              </div>
            </div>
            <div className="col-lg-6">
               <div className="bottom-card-sec">
                <h4>Subscription Status</h4>
                <div className="bottom-card-list">
                  <Bottomcard
                  description="Subscription/day"
                  amount="20"
                  />
                  <Bottomcard
                  description="Subscription/week"
                  amount="200"
                  />
                  <Bottomcard
                  description="Subscription/month"
                  amount="1000"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bottom-card-sec">
                <h4>Revenue Status</h4>
                <div className="bottom-card-list">
                  <Bottomcard
                  description="Revenue/day"
                  amount="$3450"
                  />
                  <Bottomcard
                  description="Revenue/week"
                  amount="200"
                  />
                  <Bottomcard
                  description="Revenue/month"
                  amount="1000"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="registration-table sky-bg bg-adj">
         <div className="registration-table-wrap white-bg">
          <div className="table-head">
           <h2>Recent Registered Users</h2>
          </div>
          <Datatable/>
          <div className="bottom-btn">
            <Button title="View More"/>
          </div>
         </div>
        </div>
      </section>
  )
}

export default maincontent
