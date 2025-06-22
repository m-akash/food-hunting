import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    
  return (
    <div className="w-full md:w-[870px] mx-auto px-4">
      <SectionTitle
        heading="Payment History"
        subHeading="---At a Glance!---"
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>EMAIL</th>
              <th>CATEGORY</th>
              <th>TOTAL PRICE</th>
              <th>PAYMENT DATE</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                <div className="font-bold">Hart Hagerty</div>
              </td>
              <td>Food Order</td>
              <td>$25.00</td>
              <td>2024-07-22</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>
                <div className="font-bold">Brice Swyre</div>
              </td>
              <td>Food Order</td>
              <td>$30.00</td>
              <td>2024-07-21</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>
                <div className="font-bold">Marjy Ferencz</div>
              </td>
              <td>Food Order</td>
              <td>$45.50</td>
              <td>2024-07-20</td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>4</th>
              <td>
                <div className="font-bold">Yancy Tear</div>
              </td>
              <td>Food Order</td>
              <td>$15.75</td>
              <td>2024-07-19</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
