export default function DentistCard({ dentist, onBook }) {
  return (
    <div className="bg-[#C5D5E2] rounded-xl p-4 text-[12px] lg:text-[16px] flex justify-between lg:items-end flex-col  lg:flex-row gap-4 tracking-widest transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex flex-col items-start justify-between">
        <img
          src={dentist.image}
          alt="dentist"
          className="w-70 h-70 lg:w-60 object-cover object-top rounded-lg"
        />
        
      </div>

      <div className="flex flex-col justify-between items-start">
        <h2 className="text-[18px] lg:text-[24px] font-semibold">{dentist.name}</h2>
        
          <p className="font-bold ">{dentist.qualification}</p>
          <p className="">{dentist.experience} years experience</p>
        
      <p className="mt-2 font-medium">{dentist.clinicName}</p>
      <p className="text-gray-500">{dentist.address}</p>
      <button
          onClick={() => onBook(dentist)}
          className="mt-3 bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-600 hover:cursor-pointer transition duration-75"
        >
          Book Appointment
        </button>
      </div>


    </div>
  );
}