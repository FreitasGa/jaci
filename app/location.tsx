import React, { useState, useEffect } from 'react';

export default function LocationComponent() {
    const [location, setLocation] = useState<GeolocationPosition | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation(position);
                localStorage.setItem('userLocation', JSON.stringify(position));
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);
}