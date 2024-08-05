function GuardianForm({studentData}) {
	return (
		<div className="min-w-[300px]">
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guardianName">
					Họ tên người giám hộ
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="guardianName"
					type="text"
					name="guardianName"
					value={studentData?.nameGuardian}
					readOnly
				/>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guardianDob">
					Ngày tháng năm sinh
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="guardianDob"
					type="text"
					name="guardianDob"
					value={studentData?.dateBirthGuardian}
					readOnly
				/>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guardianAddress">
					Địa chỉ
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="guardianAddress"
					type="text"
					name="guardianAddress"
					value={studentData?.addressGuardian}
					readOnly
				/>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guardianTel">
					Số điện thoại
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="guardianTel"
					type="text"
					name="guardianTel"
					value={studentData?.phoneGuardian}
					readOnly
				/>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guardianIdCard">
					Số CCCD/ CMND
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="guardianIdCard"
					type="text"
					name="guardianIdCard"
					value={studentData?.IDGuardian}
					readOnly
				/>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guardianEmail">
					Email
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="guardianEmail"
					type="text"
					name="guardianEmail"
					value={studentData?.emailGuardian}
					readOnly
				/>
			</div>
		</div>
	);
}

export default GuardianForm;