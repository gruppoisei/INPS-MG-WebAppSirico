const gulp = require('gulp');
const path = require('path');

// Task separata per copiare i file da dist a wwwroot/ClientApp
gulp.task('copy-dist-to-wwwroot', () => {
    console.log('Copia dei file dalla cartella dist a wwwroot/ClientApp');
    return gulp.src(path.join(__dirname, 'dist/**/*')) // Seleziona tutti i file dalla cartella dist
        .pipe(gulp.dest(path.join(__dirname, '..', 'wwwroot', 'ClientApp'))); // Copia in wwwroot/ClientApp
});

// Task di default che invoca la task copy-dist-to-wwwroot
function defaultTask(cb) {
    gulp.series('copy-dist-to-wwwroot')(cb);  // Esegue la task copy-dist-to-wwwroot come task di default
}

exports.default = defaultTask;
exports['copy-dist-to-wwwroot'] = gulp.task('copy-dist-to-wwwroot'); // Esportiamo anche il task separato