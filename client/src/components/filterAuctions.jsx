import './filter.css';

function FilterActions () {

    return (
        <form>
            <div class="std-filters-box prop-filters radius-10 grid-5 grid-2-t grid-1-p filter-modal-mobile" modal-name-new="filters-modal">
                {/* Filed */}
                <div class="field-group mb-15-p">
                    <p class="top-title font-18 mb-10">نوع العقار</p>
                    <select class="input select2-hidden-accessible" name="propertyType" data-select2-id="" tabindex="-1" aria-hidden="true">
                        <option value="">يرجى الاختيار</option>
                        <option selected="" value="" data-select2-id="">عمارة سكنية تجارية</option>
                        <option value="">عمارة تجارية</option>
                        <option value="">أرض تجارية</option>
                    </select>
                </div>
                {/* Filed  */}
                <div class="form-group mb-15-p">
                    <p class="top-title font-18 mb-10">المدينة</p>
                    <select class="input select2-hidden-accessible" name="city" data-select2-id="select2-data-4-vek0" tabindex="-1" aria-hidden="true">
                        <option value="" data-select2-id="select2-data-6-9z6o">يرجى الاختيار</option>
                        <option data-city-areas="" value="">الرياض</option>
                        <option data-city-areas="" value="">الدمام</option>
                    </select>
                </div>
                {/* Filed */}
                <div class="form-group mb-15-p">
                    <p class="top-title font-18 mb-10">المنطقة</p>
                    <select class="input select2-hidden-accessible" name="area" disabled="" pre-value="" data-select2-id="select2-data-7-pgvz" tabindex="-1" aria-hidden="true">
                        <option value="" data-select2-id="">يرجى الاختيار</option>
                    </select>
                </div>
                {/* Submit */}
                <div class="form-group d-flex align-end">
                    <button class="btn" type="submit">البحث</button>
                </div>
            </div>
        </form>
    )
}

export default FilterActions;