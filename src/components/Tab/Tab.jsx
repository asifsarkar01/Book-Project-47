

const Tab = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Book listed</h1>

            <div role="tablist" className="tabs tabs-bordered">
  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Read-list" />
  <div role="tabpanel" className="tab-content p-10">Books I Read</div>

  <input
    type="radio"
    name="my_tabs_1"
    role="tab"
    className="tab"
    aria-label="Wish-List"
    defaultChecked />
  <div role="tabpanel" className="tab-content p-10">My-WishList</div>
</div>
           
        </div>
    );
};

export default Tab;