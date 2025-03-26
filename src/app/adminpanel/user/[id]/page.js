"use client";
import { useParams } from "next/navigation";

const userDetails = {
  1: {
    fullName: "John Doe",
    email: "john@example.com",
    phoneNumber: "+1234567890",
    dob: "1995-05-10",
    address: "123 Street, City",
    city: "New York",
    state: "NY",
    country: "USA",
    rent: "1200 USD",
    rentPerDay: "40 USD",
    plan: "5%",
    tokens: "10",
    discount: "15%",
    payableAmount: "1020 USD",
    paymentType: "Credit Card",
  },
  2: {
    fullName: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "+9876543210",
    dob: "1993-08-21",
    address: "456 Avenue, City",
    city: "Los Angeles",
    state: "CA",
    country: "USA",
    rent: "1000 USD",
    rentPerDay: "35 USD",
    plan: "4%",
    tokens: "8",
    discount: "10%",
    payableAmount: "900 USD",
    paymentType: "Bank Transfer",
  },
  3: {
    fullName: "Alice Johnson",
    email: "alice@example.com",
    phoneNumber: "+4567891230",
    dob: "1990-03-12",
    address: "789 Blvd, City",
    city: "San Francisco",
    state: "CA",
    country: "USA",
    rent: "900 USD",
    rentPerDay: "30 USD",
    plan: "3%",
    tokens: "7",
    discount: "8%",
    payableAmount: "828 USD",
    paymentType: "PayPal",
  },
  4: {
    fullName: "Bob Brown",
    email: "bob@example.com",
    phoneNumber: "+7890123456",
    dob: "1992-11-23",
    address: "321 Lane, City",
    city: "Chicago",
    state: "IL",
    country: "USA",
    rent: "1100 USD",
    rentPerDay: "37 USD",
    plan: "4.5%",
    tokens: "9",
    discount: "12%",
    payableAmount: "968 USD",
    paymentType: "Debit Card",
  },
  5: {
    fullName: "Charlie White",
    email: "charlie@example.com",
    phoneNumber: "+6543210987",
    dob: "1991-07-05",
    address: "654 Road, City",
    city: "Seattle",
    state: "WA",
    country: "USA",
    rent: "950 USD",
    rentPerDay: "32 USD",
    plan: "3.5%",
    tokens: "6",
    discount: "7%",
    payableAmount: "884 USD",
    paymentType: "Crypto",
  },
};

export default function UserDetailsPage() {
  const { id } = useParams();
  const user = userDetails[id];

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold text-red-500">
          User not found.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          User Details
        </h1>

        {/* Personal Details */}
        <div className="mb-6 p-4 border rounded-lg bg-blue-50">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Personal Information
          </h2>
          <p>
            <strong>Full Name:</strong> {user.fullName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phoneNumber}
          </p>
          <p>
            <strong>Date of Birth:</strong> {user.dob}
          </p>
          <p>
            <strong>Address:</strong> {user.address}, {user.city}, {user.state},{" "}
            {user.country}
          </p>
        </div>

        {/* Rental Details */}
        <div className="mb-6 p-4 border rounded-lg bg-green-50">
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            Rental Information
          </h2>
          <p>
            <strong>Monthly Rent:</strong> {user.rent}
          </p>
          <p>
            <strong>Rent Per Day:</strong> {user.rentPerDay}
          </p>
          <p>
            <strong>Plan:</strong> {user.plan}
          </p>
          <p>
            <strong>Tokens:</strong> {user.tokens}
          </p>
          <p>
            <strong>Discount:</strong> {user.discount}
          </p>
          <p>
            <strong>Payable Amount:</strong> {user.payableAmount}
          </p>
          <p>
            <strong>Payment Type:</strong> {user.paymentType}
          </p>
        </div>

        {/* Action Buttons */}
      </div>
    </div>
  );
}
