export default function RoutesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Our Property Routes</h1>
      <p className="text-gray-600 mb-8">
        We operate in major cities across Japan. Explore featured properties from each route below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src="/properties/tokyo.jpg"
            alt="Tokyo Property"
            className="rounded-lg shadow"
          />
          <h2 className="text-xl font-semibold mt-2">Tokyo Property</h2>
        </div>

        <div>
          <img
            src="/properties/kyoto.jpg"
            alt="Kyoto Property"
            className="rounded-lg shadow"
          />
          <h2 className="text-xl font-semibold mt-2">Kyoto Property</h2>
        </div>

        {/* Add more properties as needed */}
      </div>
    </div>
  );
}
