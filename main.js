function startClassification()

{
    navigation.mediaDevices.getUserMedia({
        audio: true

    })
}



function modelReady() {
    classifier.classify(gotResults);

}