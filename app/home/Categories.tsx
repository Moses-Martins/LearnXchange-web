
const images = [
  { id: 1, url: 'first-image.png', alt: 'Image 1 Description' },
  { id: 2, url: 'second-image.png', alt: 'Image 2 Description' },
  { id: 3, url: 'third-image.png', alt: 'Image 3 Description' },
  { id: 4, url: 'first-image.png', alt: 'Image 4 Description' },
  { id: 5, url: 'second-image.png', alt: 'Image 5 Description' },
  { id: 6, url: 'third-image.png', alt: 'Image 6 Description' },
  { id: 7, url: 'first-image.png', alt: 'Image 7 Description' },
  { id: 8, url: 'second-image.png', alt: 'Image 8 Description' },
  { id: 9, url: 'third-image.png', alt: 'Image 9 Description' },
];

export default function Categories() {
  return (
    <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* --- Header Section --- */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-3xl font-bold text-gray-900">Explore Categories</h2>
        <p className="mt-1 text-sm sm:text-lg text-gray-600">Explore our diverse range of skill categories</p>
      </div>

      {/* --- Image Grid Section --- */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image) => (
          <div
            key={image.id}
            className="w-full aspect-square overflow-hidden bg-gray-100 rounded-sm shadow-md"
          >
            {/* - w-full and h-full ensure the image fills the parent div.
              - object-cover crops the image to cover the entire container 
                while preserving its aspect ratio.
              - aspect-square on the parent ensures the grid cells are square.
            */}
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};



  
