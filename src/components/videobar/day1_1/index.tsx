import { videoUrl } from "../../videourl"

export const Videobarday1_1 = () => {
  return (
    <video controls id="video8" width="800" height="480" >
      <source src={videoUrl.day1.video1} type="video/mp4">
      </source>
    </video>
  )
}
