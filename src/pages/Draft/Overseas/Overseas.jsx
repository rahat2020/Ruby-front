import React,{useEffect} from 'react'
import Headers from '../../../components/Headers/Headers'
import DraftNav from '../DraftNav/DraftNav'

const Overseas = () => {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}, [])
  return (
    <>
      <Headers />
      <DraftNav/>
      <div className="dmstic mt-3 mb-3">
        <div className="container">

          <div className="p">
            <div className="table-responsive">
              <table className="table table-striped border">
                <thead className="bg-primary text-white ">
                  <tr>
                    <th scope="col">SN</th>
                    <th scope="col">Description</th>
                    <th scope="col">Tier</th>
                    <th scope="col">Number</th>
                  </tr>
                </thead>
                <tbody >
                  <tr >
                    <th scope="row" className='border-end'>1</th>
                    <td className='border-end'>FIFAWC/WC 20/Euro/Olympic Experience</td>
                    <td className='border-end'>A</td>
                    <td className='border-end'>1</td>
                  </tr>
                  <tr>
                    <th scope="row" className='border-end'>2</th>
                    <td className='border-end'>National Teams Players (excluding South Asia)</td>
                    <td className='border-end'>B</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th scope="row" className='border-end'>3</th>
                    <td className='border-end'>National Teams Players (South Asia, Nepal/India)</td>
                    <td className='border-end'>C</td>
                    <td className='border-end'>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-start flex-column">
            <h4 className='fw-bold link'>Overseas Player</h4>
            <p className="text-start fw-normal text-capitalize">✦ EACH TEAM NEED TO PICK AT LEAST 5 OVERSEAS PLAYERS FROM THE DRAFT LIST ORGANIZERS WILL BEAR THE COST OF DRAFT LISTED PLAYERS</p>
            <p className="text-start fw-normal text-capitalize">✦ OVERSEAS PLAYERS TIER WILL BE A, B & C</p>
            <p className="text-start fw-normal text-capitalize">✦ EACH TEAM CAN PICK MAXIMUM 3 PLAYERS FROM THE TIER A & B (1 FROM TIER A  & 2 FROM TIER B ) & MAXIMUM 2 PLAYERS FROM TIER C</p>
            <p className="text-start fw-normal text-capitalize">✦ EACH TEAM CAN BRING MAXIMUM 1 OVERSEAS OR DOMESTIC PLAYERS AT THEIR OWN COST  (OUTSIDE THE DRAFT)</p>
            <p className="text-start fw-normal text-capitalize">✦ THERE WILL BE MAXIMUM 4 OVERSEAS PLAYERS IN THE PLAYING 11</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Overseas