import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import loc_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "424666af-7675-469a-b986-e90bdedbc4f6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat eveniet et aliquid maxime impedit consequuntur omnis amet. Facilis autem tenetur beatae itaque ipsum cumque qui blanditiis commodi aperiam omnis. Perspiciatis!</p>
        <ul>
            <li><img src={mail_icon} alt="mail" />Contact@GreatStack.dev</li>
            <li><img src={phone_icon} alt="phone" />+1 123-456-7890</li>
            <li><img src={loc_icon} alt="location" />77 Massachusetts Ave, Cambridge<br /> MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder='Enter your mobile number' required />
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow}/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
