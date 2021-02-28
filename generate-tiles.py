from qgis.core import *

QgsApplication.setPrefixPath("C:\Program Files\QGIS 3.16")
qgs = QgsApplication([], false)

qgs.initQgis()

qgs.exitQgis()