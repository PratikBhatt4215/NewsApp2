import React  from 'react'

const Newsitem =(props)=> {

        let { title, description , imageUrl , newsUrl,author,date,source} = props;
        return (
            <div className="my-3">
                
                <div className="card ">
                    <div  style={{
                        display: 'flex',
                        position: 'absolute',
                        right: '0'
                    }}>
                    </div>
                    <img src={!imageUrl ? "https://c.ndtvimg.com/2021-08/t62q1qdg_chris-cairns-afp_625x300_27_August_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body " >
                        <h5 className="card-title fw-bold  ">{title}</h5>
                    <span className=" badge rounded-pill bg-danger " >{source}</span>
                        <p className="card-text text-success">{description}</p>

                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on { new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl}  target="_blank" className="btn  btn-primary " style={{marginLeft:"8rem"}}>Read More</a>
                    </div>
                    </div>
            </div>
        )
    
}

export default Newsitem
