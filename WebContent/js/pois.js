	function calculateDistanceMeters(aLong, aLat,
			bLong, bLat) {

		var d2r = (Math.PI / 180);

		var dLat = (bLat - aLat) * d2r;
		var dLon = (bLong - aLong) * d2r;
		var a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
				+ Math.cos(aLat * d2r) * Math.cos(bLat * d2r)
				* Math.sin(dLon / 2) * Math.sin(dLon / 2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

		return EARTH_RADIUS_KM * c * 1000;

	}

	
	private double gps2m(float lat_a, float lng_a, float lat_b, float lng_b) {
	    float pk = (float) (180/3.14169);

	    float a1 = lat_a / pk;
	    float a2 = lng_a / pk;
	    float b1 = lat_b / pk;
	    float b2 = lng_b / pk;

	    float t1 = FloatMath.cos(a1)*FloatMath.cos(a2)*FloatMath.cos(b1)*FloatMath.cos(b2);
	    float t2 = FloatMath.cos(a1)*FloatMath.sin(a2)*FloatMath.cos(b1)*FloatMath.sin(b2);
	    float t3 = FloatMath.sin(a1)*FloatMath.sin(b1);
	    double tt = Math.acos(t1 + t2 + t3);

	    return 6366000*tt;
	}