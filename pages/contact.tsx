import { useState } from "react";

export default function Contact() {

	// States for the form fields
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phonenumber, setPhonenumber] = useState("");
	const [message, setMessage] = useState("");

	// Form validation state
	const [errors, setErrors] = useState({});

	const formValidation = () => {
		let formErrors: { [field: string]: boolean} = {};
		let isValid = true;

		if (firstName.length <= 0) {
			formErrors["firstname"] = true;
			isValid = false;
		} 

		if (lastName.length <= 0) {
			formErrors["lastname"] = true;
			isValid = false;
		}

		// TODO: other email validations
		if (email.length <= 0) {
			formErrors["email"] = true;
			isValid = false;
		}

		// TODO: phone number validations
		if (phonenumber.length <= 0) {
			formErrors["phonenumber"] = true;
			isValid = false;
		}

		if (message.length <= 0) {
			formErrors["message"] = true;
			isValid = false;
		}

		setErrors(formErrors);
		return isValid;
	}

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
	
		let isValidForm = await formValidation();
	
		if (isValidForm) {
		  const res = await fetch("/api/sendgrid", {
			body: JSON.stringify({
			  email: email,
			  firstname: firstName,
			  lastname: lastName,
			  phonenumber: phonenumber,
			  message: message,
			}),
			headers: {
			  "Content-Type": "application/json",
			},
			method: "POST",
		  });
	
		  const { error } = await res.json();
		  if (error) {
			console.log(error);
			return;
		  }
		} else {
			// TODO: handle invalid form
			console.log(errors);
		}
	  };

	return (
		<div 
		role="contact-page"
		id="contact-page"
		className="flex-1 w-full h-full bg-light-purple bg-splash-screen bg-no-repeat bg-center bg-contain">
            <div className="flex flex-col w-full h-full items-center justify-center">
                <p className="text-heading text-light-green text-stroke">CONTACT ME</p>
				<form 
				onSubmit={handleSubmit}
				className="w-5/12 mx-auto mt-10">
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div>
							<label className="block text-label">FIRST NAME</label>
							<input 
								type="text" 
								name="first-name" 
								id="first-name" 
								autoComplete="given-name"
								onChange={(e) => {
									setFirstName(e.target.value);
								  }} 
								className="block w-full rounded-md px-3.5 py-1.5 bg-white/60 border border-gray"
							/>
						</div>
						<div>
							<label className="block text-label">LAST NAME</label>
							<input 
								type="text" 
								name="last-name" 
								id="last-name" 
								autoComplete="family-name" 
								onChange={(e) => {
									setLastName(e.target.value);
								  }}
								className="block w-full rounded-md px-3.5 py-1.5 bg-white/60 border border-gray"
							/>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label className="block text-label mt-1">EMAIL</label>
						<input 
							type="text" 
							name="email" 
							id="email" 
							autoComplete="email"
							onChange={(e) => {
								setEmail(e.target.value);
							  }} 
							className="block w-full rounded-md px-3.5 py-1.5 bg-white/60 border border-gray"
						/>
					</div>
					<div className="sm:col-span-2">
						<label className="block text-label mt-1">PHONE NUMBER</label>
						<input 
							type="tel" 
							name="phone-number" 
							id="phone-number" 
							autoComplete="tel"
							onChange={(e) => {
								setPhonenumber(e.target.value);
							  }} 
							className="block w-full rounded-md px-3.5 py-1.5 bg-white/60 border border-gray"
						/>
					</div>
					<div className="sm:col-span-2">
						<label className="block text-label mt-1">MESSAGE</label>
						<textarea 
							name="message" 
							id="message" 
							rows={4}
							onChange={(e) => {
								setMessage(e.target.value);
							  }}
							className="block w-full rounded-md px-3.5 py-1.5 bg-white/60 border border-gray"
						/>
					</div>
					<div className="mt-8">
						<button type="submit" className="block h-10 w-full rounded-md px-3.5 py-1.5 text-white bg-button border border-gray">
							SEND
						</button>
					</div>
				</form>
            </div>
        </div>
	);
};