import Script from "next/script";

declare global {
	interface Window {
		kakao: any;
	}
}

const Map = () => {
	const loadKakaoMap = () => {
		window.kakao.maps.load(() => {
			const mapContainer = document.getElementById("map");
			const mapOption = {
				center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
				level: 3, //지도의 레벨(확대, 축소 정도)
			};
			new window.kakao.maps.Map(mapContainer, mapOption); //지도 생성 및 객체 리턴
		});
	};
	return (
		<>
			<Script
				strategy="afterInteractive"
				type="text/javascript"
				src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
				onReady={loadKakaoMap}
			/>
			<div id="map" className="w-full h-screen"></div>
		</>
	);
};

export default Map;
