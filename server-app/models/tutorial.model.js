module.exports = (mongoose) => {
    var schema = mongoose.Schema(
        {
            firstName: String,
            lastName: String,
            birthdate: String,
            email: String,
            phone: String,
            street1: String,
            street2: String,
            city: String,
            stateProvince: String,
            postalCode: String,
            country: String
        },
        { timestamps: { createdAt: false, updatedAt: false } }
    );

    schema.method('toJSON', function () {
        const { __v, _id, ...object } = this.toObject();
        //object.id = _id;
        return object;
    });

    const Tutorial = mongoose.model('tutorial', schema);
    return Tutorial;
};
