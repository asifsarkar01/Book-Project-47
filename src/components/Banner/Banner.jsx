import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className='ml-20'>
      <h1 className="text-5xl font-bold mb-6">Books to freshen up your bookshe</h1>
      <button className="btn btn-primary">View The -List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;