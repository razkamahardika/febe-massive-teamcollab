import Header from '../components/Header'
import '../assets/pages/Chart.css'

const Chart = () => {
  return (
    <>
    <Header />
    
    <div className="app">
      <div className="title-container">
        <h1 className="title">Your Chart</h1>
      </div>
      <div className="content">
        <div className="table-container">
          <table className="product-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Details</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Example Product</td>
                <td>Example Details</td>
                <td>1</td>
                <td>$100</td>
              </tr>
            </tbody>
          </table>
          <div className="summary">
            <h2>Summary</h2>
            <hr />
            <div className="summary-item">
              <span>Sub-total</span>
              <span>Rp.3.000.000</span>
            </div>
            <div className="summary-item">
              <span>Tax</span>
              <span>Rp.300.000</span>
            </div>
            <div className="summary-item">
              <span>Total</span>
              <span>Rp.3.300.000</span>
            </div>
            <hr />
            <center>
              <button className="button">Checkout</button>
            </center>
          </div>
        </div>
      </div>
      <div className="whatsapp-icon">
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>

    </>

  );
};



export default Chart
