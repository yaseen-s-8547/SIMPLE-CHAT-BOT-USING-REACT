import spinner from '../assets/spinner.gif'
import robot from '../assets/robot.webp'
import userImg from '../assets/user.jpg'



export function MYChatMessages({ message, sender, isTyping,time }) {
  //const message = props.message;
  //const sender = props.sender;

  return (
    <>
      {sender == 'robo' &&

        <div className="container  ">
          <div className="row">
            <div className="col-sm-12 w-50">
              <div className="d-flex flex-row justify-content-start">
                <div>
                  <img className="rounded-circle me-2 border border-dark" src={robot} style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                </div>
                {isTyping ? (<img src={spinner}
                  style={{ width: 100 }} />) : <div className=" border border-dark   bg-success rounded text-light fw-bold text-center p-3">
                  {message}
                  <div className="text-end text-light opacity-75" style={{ fontSize: "0.75rem" }}>
    {time}
  </div>
                </div>}



              </div>
            </div>
          </div>

        </div>}
      {sender == 'user' &&
        <div className="container  ">
          <div className="row">
            <div className="col-sm-12">
              <div className="d-flex flex-row justify-content-end">
                <div className=" border border-dark   bg-success rounded text-light fw-bold text-center p-3">
                  {message}
                  <div className="text-end text-light opacity-75" style={{ fontSize: "0.75rem" }}>
    {time}
  </div>
                </div>
                <div>
                  <img className="rounded-circle ms-2 border border-dark" src={userImg} style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>
        </div>}
    </>
  )

}