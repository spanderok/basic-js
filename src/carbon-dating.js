const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

module.exports = function dateSample(sampleActivity) {

    let age = false

    if (typeof(sampleActivity) === 'string')   {
        let numberSampleActivity = parseFloat(sampleActivity)

        if (numberSampleActivity < MODERN_ACTIVITY && numberSampleActivity > 0) {
            const ln2 = 0.693
            const k = ln2 / HALF_LIFE_PERIOD
            const t = Math.log(MODERN_ACTIVITY / numberSampleActivity) / k;
            age = Math.ceil(t)
        }
        
    }
    return age

}