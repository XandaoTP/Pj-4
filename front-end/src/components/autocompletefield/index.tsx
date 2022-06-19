import { Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";
import { Address } from "../../entities/adress";
import { FormField, FormFieldProps } from "../formfield";
import { LoadGoogleScript } from "../LoadGoogleScript";

type Props = {
    value: null | Address
    onChange: (address: null | Address) => void
} & Omit<FormFieldProps, 'value' | 'onChange'>

export function AutoCompleteGoogleField ({ value, onChange, ...fieldProps }: Props) {
    const autoCompleteRef = useRef<null | google.maps.places.Autocomplete>()
    const handleLoad = (autocomplete: google.maps.places.Autocomplete) => {
        autoCompleteRef.current = autocomplete
    }
    const handleChange = () => {
        const place = autoCompleteRef.current?.getPlace()
        if(place && place.formatted_address && place.geometry?.location) {
            const address: Address = {
                address: place.formatted_address,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            }
            onChange(address)
        }
    }
    return (
        <LoadGoogleScript>
            <Autocomplete
            onLoad={handleLoad}
            onPlaceChanged={handleChange}>
                <FormField
                 {...fieldProps}
                  onChange={() => onChange(null) }/>
            </Autocomplete>
        </LoadGoogleScript>
    )
}