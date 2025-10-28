export default function ProgressBar({ width }) {
    console.log(width);
    return (
        <div className="container">
            <div className="innerContainer" style={{width: `${width}%`}}>
                {width}%
            </div>
        </div>
    )
}