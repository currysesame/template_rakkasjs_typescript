import { videoUrl } from "../../videourl"

export const Videobarday2_2 = () => {
  return (
    <video controls id="video8" width="800" height="480" >
      <source src={videoUrl.day2.video2} type="video/mp4">
      </source>
    </video>
  )
}
