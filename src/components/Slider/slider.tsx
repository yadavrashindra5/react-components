export default function Slider() {
  return (
    <div>
      <label htmlFor="volume">Volume</label>
      <input type="range" id="volume" name="volume" min={0} max={10} step={1}  />
    </div>
  );
}
