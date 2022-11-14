const Events = () => {
    const bestEvents = [
        {
          id: 1,
          src: 'https://storage.googleapis.com/afs-prod/media/e53811360eed4b8ba26b5f635d703a7c/3000.jpeg',
          title: 'Cinema',
          price: 1500,
          date: '20/11/22'
        },
        {
          id: 2,
          src: 'https://www.bca.co.id/-/media/Feature/News/Edukatips/2022/09/20220912-tips-nonton-konser-pertama-kali-banner.jpg',
          title: 'Concert',
          price: 1500,
          date: '02/11/22'
        },
        {
          id: 3,
          src: 'https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cmetadata=none%2Conerror=redirect%2Cq=70%2Csharpen=1%2Cwidth=956/wp-content/uploads/world-theater-day.jpg',
          title: 'Theater',
           price: 1500,
          date: '20/11/22'
        },
        {
          id: 4,
          src: 'https://caucasusholidays.am/sites/default/files/Opera-%26-Ballet-Theatre-2.2.jpg',
          title: 'Opera and theater',
          price: 1500,
          date: '20/11/22'
        },
        {
          id: 5,
          src: 'https://www.houstoncitybook.com/media-library/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNjgyMjk3MC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTcyNjIxMjQzOH0.XruMC_JRXa6bAjQDnSKUKyxvIw1hHJxPdBKv04PbtPg/image.jpg?width=1245&height=700&quality=85&coordinates=0%2C63%2C0%2C111',
          title: 'Club and pub',
          price: 1500,
          date: '03/12/22'
        },
        {
          id: 6,
          src: 'https://rg.ru/uploads/images/207/64/03/cirk.jpg',
          title: 'Other',
           price: 1500,
          date: '30/11/22'
        },
      ]

    return (
        <div className="event-cards">
            <div className="best-cards">
                {
                bestEvents.map(({id, src, title, info, price}) => (
                    
                    <div key={id} className='best-card'>
                        <div className="best-img-div">
                        <img className="best-img" src={src}/>
                            <div className="best-title">
                            {title}
                            </div>
                        </div>
                        
                        <div className="best-order">

                        </div>
                    </div>
                    
                ))
                }
            </div>
        </div>
    )
}

export default Events